<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 p-4">
        <div class="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h1 class="text-4xl font-bold text-center text-blue-800 mb-6">Tentang Platform</h1>
            <p class="text-gray-700 text-lg mb-4">
                Platform ini dirancang untuk membantu anak-anak belajar dengan cara yang menyenangkan dan interaktif.
                Kami menawarkan berbagai mini-game edukatif yang dirancang untuk meningkatkan keterampilan anak-anak. 
                Dengan mengadopsi teknik mind-mapping diharapkan bisa menjadi pendekatan yang ramah anak, 
                kami berusaha untuk memberikan pengalaman belajar yang menyenangkan bagi anak.
            </p>
            <h2 class="text-3xl font-bold text-center text-purple-800 mt-8 mb-4">Tim Kami</h2>
            <div class="flex flex-col md:flex-row justify-around items-center">
                <!-- Profil Tya -->
                <div class="flex flex-col items-center mb-6 md:mb-0 md:mr-6">
                    <img src="https://via.placeholder.com/120" alt="Profile Image"
                        class="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 shadow-lg" />
                    <h3 class="text-2xl font-bold text-center text-green-800">Nama Anda</h3>
                    <p class="text-gray-700 text-center">Pengembang Utama</p>
                    <p class="text-gray-600 text-center mt-2">Saya adalah pengembang yang bertanggung jawab atas
                        pembuatan platform ini. Dengan pengalaman dalam pengembangan aplikasi interaktif, saya
                        bersemangat untuk menciptakan solusi pendidikan yang inovatif.</p>
                </div>

                <!-- Profil Ariana -->
                <div class="flex flex-col items-center">
                    <img src="https://via.placeholder.com/120" alt="Profile Image"
                        class="w-32 h-32 rounded-full border-4 border-green-500 mb-4 shadow-lg" />
                    <h3 class="text-2xl font-bold text-center text-green-800">Nama Teman Anda</h3>
                    <p class="text-gray-700 text-center">Desainer & Co-Pengembang</p>
                    <p class="text-gray-600 text-center mt-2">Sebagai desainer dan co-pengembang, saya fokus pada
                        menciptakan antarmuka yang menarik dan mudah digunakan. Saya percaya bahwa desain yang baik
                        dapat membuat pembelajaran menjadi lebih menyenangkan.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>