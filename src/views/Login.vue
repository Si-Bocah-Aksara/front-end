<template>
    <div class="flex h-screen">
        <div class="w-1/2 flex items-center justify-center bg-blue-100">
            <h1 class="text-4xl font-bold text-blue-600">Si Bocah Aksara</h1>
        </div>
        <div class="w-1/2 flex flex-col items-center justify-center bg-white">
            <form class="w-full max-w-sm p-8 bg-gray-50 rounded-lg shadow-md">
                <h1 class="text-2xl font-semibold text-center mb-6 text-gray-700">Login Page</h1>
                <div class="relative mt-4 w-full">
                    <input type="text" name="email" id="email"
                        class="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="E-mail">
                </div>
                <div class="relative mt-4 w-full">
                    <input type="password" name="password" id="password"
                        class="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password">
                </div>
                <button type="submit" class="w-full mt-6 bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Login</button>
                <p class="mt-6 text-center text-gray-600">Belum punya akun? <RouterLink to="/sign-in" class="text-indigo-500 underline">Sign In</RouterLink></p>
            </form>
        </div>
    </div>
</template>
