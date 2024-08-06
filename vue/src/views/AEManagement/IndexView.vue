<template>
    <div class="ae-management">
        <!-- 按钮，用于打开上传表单弹窗 -->
        <el-button type="primary" @click="openUploadDialog">上传新的 AE 文件</el-button>

        <!-- 上传表单的弹窗 -->
        <el-dialog
            v-model="uploadDialogVisible"
            title="上传 AE 文件"
            width="50%"
            :before-close="closeUploadDialog"
        >
            <el-form :model="uploadForm" @submit.prevent="handleUpload" :loading="uploading">
                <el-form-item label="标题">
                    <el-input v-model="uploadForm.title" />
                </el-form-item>
                <el-form-item label="文件">
                    <input type="file" @change="handleFileChange" />
                </el-form-item>
                <el-form-item label="总合成图层">
                    <el-input v-model="uploadForm.main_layer" />
                </el-form-item>
                <el-form-item label="类型">
                    <el-input v-model="uploadForm.type" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleUpload" :loading="uploading">上传 AEP</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-table :data="aeList" style="width: 100%" v-loading="loading">
            <el-table-column prop="id" label="ID" sortable></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column label="视频文字">
                <template #default="scope">
                    <div v-for="(item, index) in JSON.parse(scope.row.text_layers_content.replace(/\n/g, ''))" :key="index">
                        <div v-for="(text, index) in item.textLayers" :key="index">{{ text.textContent }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="main_layer" label="总合成图层"></el-table-column>
            <el-table-column prop="upload_time" label="上传时间"></el-table-column>
            <el-table-column prop="type" label="类型" sortable></el-table-column>
            <el-table-column label="操作">
                <template v-slot="scope">
                    <el-button @click="openVideoDialog(scope.row.video_path)" type="primary" size="small">查看视频</el-button>
                    <el-button @click="handleDelete(scope.row.id)" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 视频查看的弹窗 -->
        <el-dialog
            v-model="videoDialogVisible"
            width="50%"
            :before-close="closeVideoDialog"
        >
            <video controls width="100%" height="auto" :key="currentVideoPath">
                <source :src="currentVideoPath" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </el-dialog>
    </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';
import { staticBaseURL } from '@/plugins/axios';
const { proxy } = getCurrentInstance();

const uploadForm = ref({
    title: '',
    file: null,
    main_layer: '',
    type: '', // 新增类型字段
});

const aeList = ref([]);
const loading = ref(false);
const uploading = ref(false); // 控制上传时的加载状态

const uploadDialogVisible = ref(false); // 控制上传表单弹窗显示
const videoDialogVisible = ref(false); // 控制视频弹窗显示
const currentVideoPath = ref(''); // 当前展示视频的路径

const fetchAeFiles = async () => {
    loading.value = true;
    try {
        const response = await proxy.$http.get('/ae');
        aeList.value = response.data.data;
    } catch (error) {
        ElMessage.error('获取 AE 文件失败');
    } finally {
        loading.value = false;
    }
};

const handleUpload = async () => {
    uploading.value = true; // 设置上传中状态
    const formData = new FormData();
    formData.append('title', uploadForm.value.title);
    formData.append('file', uploadForm.value.file);
    formData.append('main_layer', uploadForm.value.main_layer);
    formData.append('type', uploadForm.value.type); // 添加类型字段

    try {
        await proxy.$http.post('/ae/upload', formData);
        ElMessage.success('文件上传成功');
        fetchAeFiles();
        closeUploadDialog(); // 上传成功后关闭弹窗
    } catch (error) {
        ElMessage.error('文件上传失败');
    } finally {
        uploading.value = false; // 取消上传中状态
    }
};

const handleFileChange = (event) => {
    uploadForm.value.file = event.target.files[0];
};

const handleDelete = async (id) => {
    try {
        await proxy.$http.delete('/ae', { data: { id } });
        ElMessage.success('AE 文件删除成功');
        fetchAeFiles();
    } catch (error) {
        ElMessage.error('删除 AE 文件失败');
    }
};

const openUploadDialog = () => {
    uploadDialogVisible.value = true;
};

const closeUploadDialog = () => {
    uploadDialogVisible.value = false;
};

const openVideoDialog = (videoPath) => {
    currentVideoPath.value = staticBaseURL + videoPath;
    videoDialogVisible.value = true;
};

const closeVideoDialog = () => {
    currentVideoPath.value = '';
    videoDialogVisible.value = false;
};

onMounted(fetchAeFiles);
</script>
<style scoped>
.ae-management {
    padding: 20px;
}

.el-card {
    margin-bottom: 20px;
}
</style>
