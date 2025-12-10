<template>
    <FullScreenLayout>
        <div class="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
            <div class="flex relative flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900">
                <div class="flex flex-col flex-1 w-full lg:w-1/2">
                    <div class="flex flex-col flex-1 justify-center mx-auto w-full max-w-md">
                        <div>
                            <div class="mb-8 text-center sm:mb-10">
                                <div class="mb-2">
                                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                                        Welcome Back
                                    </h1>
                                </div>
                                <p class="text-sm text-gray-600 dark:text-gray-400">
                                    Sign in to your account to continue
                                </p>
                            </div>
                            <div>
                                <form @submit.prevent="form.post('/login')">
                                    <div class="space-y-5">
                                        <!-- Username / Email -->
                                        <div>
                                            <label for="username"
                                                class="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                Email or Username
                                            </label>
                                            <input type="text" id="username" v-model="form.user"
                                                placeholder="Enter your email or username"
                                                class="px-4 py-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary-500 transition-colors" />
                                        </div>
                                        <!-- Password -->
                                        <div>
                                            <div class="flex justify-between items-center mb-2">
                                                <label for="password"
                                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    Password
                                                </label>
                                                <a href="/forgot-password"
                                                    class="text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <div class="relative">
                                                <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                                    id="password" placeholder="Enter your password"
                                                    class="px-4 py-3 pr-11 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary-500 transition-colors" />
                                                <button type="button" @click="togglePasswordVisibility"
                                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
                                                    <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Remember me -->
                                        <div class="flex justify-between items-center">
                                            <label class="inline-flex gap-2 items-center select-none cursor-pointer">
                                                <input type="checkbox" v-model="form.remember"
                                                    class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <span class="text-sm text-gray-700 dark:text-gray-300">Remember me</span>
                                            </label>
                                        </div>
                                        <!-- Button -->
                                        <div>
                                            <button type="submit" :disabled="form.processing"
                                                class="flex gap-2 justify-center items-center px-4 py-3 w-full text-sm font-semibold text-white bg-primary-600 rounded-lg transition-all shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                                <span v-if="form.processing">Signing in...</span>
                                                <span v-else>Sign In</span>
                                                <svg v-if="!form.processing" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden relative items-center w-full h-full bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 lg:w-1/2 dark:from-primary-900 dark:via-secondary-900 dark:to-primary-950 lg:grid">
                    <div class="flex justify-center items-center px-8 text-white z-1">
                        <common-grid-shape />
                        <!-- Carousel Container -->
                        <div class="relative w-full max-w-2xl">
                            <!-- Carousel Items -->
                            <div class="overflow-hidden relative">
                                <div class="flex transition-transform duration-500 ease-in-out" :style="{
                                    transform: `translateX(-${currentSlide * 100
                                        }%)`,
                                }">
                                    <div v-for="(slide, index) in slides" :key="index"
                                        class="flex flex-col justify-center items-center flex-shrink-0 space-y-6 w-full min-h-[500px] text-center">
                                        <!-- Logo/Image -->
                                        <div class="flex justify-center items-center">
                                            <img v-if="slide.img_url" :src="slide.img_url" alt="Logo"
                                                class="object-contain opacity-95 drop-shadow-2xl w-250 h-250" />
                                            <img v-else src="/images/logo/bg-login.png" alt="Logo"
                                                class="object-contain opacity-95 drop-shadow-2xl w-250 h-250" />
                                        </div>

                                        <!-- Title -->
                                        <h3 class="px-4 text-3xl font-bold leading-tight">
                                            {{ slide.title }}
                                        </h3>

                                        <!-- Description -->
                                        <p class="px-8 text-lg leading-relaxed text-white/90">
                                            {{ slide.description }}
                                        </p>
                                    </div>
                                </div>

                                <!-- Navigation Dots -->
                                <div
                                    class="flex absolute bottom-0 left-1/2 gap-2 justify-center mt-36 -translate-x-1/2">
                                    <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
                                        :class="[
                                            'w-2.5 h-2.5 rounded-full transition-all duration-300',
                                            currentSlide === index
                                                ? 'bg-white w-8'
                                                : 'bg-white/40 hover:bg-white/60',
                                        ]" :aria-label="`Go to slide ${index + 1}`"></button>
                                </div>

                                <!-- Navigation Arrows -->
                                <button @click="prevSlide"
                                    class="flex absolute left-4 top-1/2 justify-center items-center w-10 h-10 text-white rounded-full backdrop-blur-sm transition-all -translate-y-1/2 bg-white/10 hover:bg-white/20"
                                    aria-label="Previous slide">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button @click="nextSlide"
                                    class="flex absolute right-4 top-1/2 justify-center items-center w-10 h-10 text-white rounded-full backdrop-blur-sm transition-all -translate-y-1/2 bg-white/10 hover:bg-white/20"
                                    aria-label="Next slide">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FullScreenLayout>
</template>

<script setup>
import FullScreenLayout from "@/Components/layout/FullScreenLayout.vue";
import CommonGridShape from "@/Components/common/CommonGridShape.vue";
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    googleLoginUrl: String,
});

const form = useForm({
    user: "",
    password: "",
    remember: false,
});
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

// Carousel state
const currentSlide = ref(0);
const slides = ref(
    [
    {
        category: "Feature",
        title: "Manage Your Business Efficiently",
        description:
            "A comprehensive platform to manage your operations, track performance, and streamline your workflow with powerful tools and insights.",
        img_url: null,
    },
    {
        category: "Feature",
        title: "Secure & Reliable",
        description:
            "Built with modern security practices to keep your data safe. Access your dashboard from anywhere, anytime.",
        img_url: null,
    },
    {
        category: "Feature",
        title: "Powerful Analytics",
        description:
            "Get real-time insights and analytics to make data-driven decisions and grow your business.",
        img_url: null,
    },
          ]
);

// Auto-play carousel
let carouselInterval = null;

const startCarousel = () => {
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
};

const stopCarousel = () => {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
};

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
    currentSlide.value =
        currentSlide.value === 0
            ? slides.value.length - 1
            : currentSlide.value - 1;
};

const goToSlide = (index) => {
    currentSlide.value = index;
    stopCarousel();
    startCarousel();
};

// Start carousel on mount
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
    if (slides.value.length > 1) {
        startCarousel();
    }
});

onUnmounted(() => {
    stopCarousel();
});
</script>
