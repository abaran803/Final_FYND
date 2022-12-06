<template>
    <div>
        <div class="banner bg bg-secondary text text-white">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-8 col-sm-5 mt-5">
                        <h1>Secure Online eXchange</h1>
                        <p class="w-75 my-3">A perfect place to buy/sell reusable products without any tension of
                            security and payments. All the authenticated buyers and sellers and payment is safely done
                            on the platform</p>
                        <a href="#featured" class="text text-white" style="text-decoration: none;">
                            <button class="btn btn-primary shadow">
                                Start Shopping
                            </button>
                        </a>
                        <button class="btn btn-success mx-2 shadow">Go to Cart</button>
                    </div>
                    <div class="col-md-4 col-sm-7">
                        <lottie-player class="img-fluid"
                            src="https://assets8.lottiefiles.com/private_files/lf30_9kdbftpx.json"
                            background="transparent" speed="0.8" style="width: 350px; height: 350px;" loop
                            autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BannerVue'
}

</script>