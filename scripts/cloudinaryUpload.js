// scripts/cloudinaryUpload.js

export async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/dykridu6j/upload`;
  const unsignedUploadPreset = 'birthday_slambook_upload';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', unsignedUploadPreset);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (data.secure_url) {
      return { success: true, url: data.secure_url };
    } else {
      return { success: false, error: data.error || 'Upload failed' };
    }
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return { success: false, error: err.message };
  }
}
