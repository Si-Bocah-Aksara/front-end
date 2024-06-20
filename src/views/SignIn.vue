<template>
    <div class="flex border-4 h-screen">
        <div class="border w-1/2 flex items-center justify-center" id="kiri">
            <h1>tes</h1>
        </div>

        <div class="border w-1/2 flex flex-col items-center justify-center" id="kanan">
            <h1 class="justify-center">Sign In Page</h1>
            <div>
                <h1>Parent Profile</h1>
                <div class="relative mt-2 rounded-md shadow-sm w-full2">
                    <input type="text" name="email" id="email"
                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="E-mail">
                </div>
    
                <div class="relative mt-2 rounded-md shadow-sm w-full">
                    <input type="password" name="password" id="password"
                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Password">
                </div>
            </div>

            <div>
                <h1>Child Profile</h1>
                <div class="relative mt-2 rounded-md shadow-sm w-full">
                    <input type="text" name="namaAnak" id="namaAnak"
                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Nama Anak">
                </div>
    
                <div class="relative mt-2 rounded-md shadow-sm w-full">
                    <input type="number" name="umurAnak" id="umurAnak"
                        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Umur Anak">
                </div>
            </div>
            <button class="border rounded-full mt-4 py-2 px-8">Login</button>

            <h1 class="mt-4">Belum punya akun? <RouterLink to="/sign-in" class="text-blue-500 underline">Sign In
                </RouterLink>
            </h1>
        </div>
    </div>
</template>