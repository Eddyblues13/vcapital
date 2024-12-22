@include('home.header')
<!-- Start Page Title Area -->
<div class="page-title-area bg-5">
    <div class="container">
        <div class="page-title-content">
            <h2>FAQ</h2>
            <ul>
                <li>
                    <a href="{{url('/')}}">
                        Home
                    </a>
                </li>

                <li>FAQ</li>
            </ul>
        </div>
    </div>
</div>
<!-- End Page Title Area -->

<!-- Start FAQ Area -->
<section class="faq-area ptb-100">
    <div class="container">
        <div class="section-title">
            <h2>Frequently Asked Questions</h2>

        </div>

        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="faq-accordion mb-used">
                    <ul class="accordion">
                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                How can I buy cryptocurrency?
                            </a>

                            <div class="accordion-content">
                                <p>Follow these steps to buy cryptocurrency using the "Buy Crypto" button:</p>
                                <ul>
                                    <li>Click on the <strong>"Buy Crypto"</strong> button located at the top of the
                                        page.</li>
                                    <li>From the dropdown menu, choose a trusted cryptocurrency exchange platform like
                                        Binance, Coinbase, Kraken, or others.</li>
                                    <li>You will be redirected to the official website of the selected platform.</li>
                                    <li>On the selected platform:
                                        <ul>
                                            <li>Create an account or log in if you already have one.</li>
                                            <li>Complete any required identity verification process.</li>
                                            <li>Link a payment method, such as a bank account or credit card, to fund
                                                your purchase.</li>
                                            <li>Search for the cryptocurrency you wish to buy and complete the
                                                transaction by following the platform's instructions.</li>
                                        </ul>
                                    </li>
                                    <li>Once your purchase is complete, transfer the cryptocurrency to your secure
                                        wallet address for safekeeping.</li>
                                </ul>
                                <p>If you need assistance, please contact our support team for help.</p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title active" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                Is Vault Capital regulated?
                            </a>

                            <div class="accordion-content show">
                                <p>Yes, Vault Capital is a registered and regulated Malta investment firm
                                    with company number C-11498630. You can learn more by clicking <a href="#">Here</a>.
                                </p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                How do I open an account with you?
                            </a>

                            <div class="accordion-content">
                                <p>Opening an account with Vault Capital is quite easy. You need to click
                                    on the registration link, fill in your details and you will be redirected to our
                                    portal. You can easily start using your dashboard.</p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                What is the minimum deposit amount?
                            </a>

                            <div class="accordion-content">
                                <p>The minimum amount for deposit is 150 USD. </p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                Are there any fees for deposits?
                            </a>

                            <div class="accordion-content">
                                <p>No there are none.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="faq-accordion">
                    <ul class="accordion">
                        <li class="accordion-item">
                            <a class="accordion-title active" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                What payment methods can I use to fund my account?
                            </a>

                            <div class="accordion-content">
                                <p>You can transfer funds through Bitcoin, Ethereum, Bitcoin Cash and Perfect Money. All
                                    the details are made available in the deposit section.</p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                How long before my deposits reflect?
                            </a>

                            <div class="accordion-content">
                                <p>Deposits using Perfect Money reflect on your account instantly. Deposits using
                                    Bitcoin, Ethereum and Bitcoin Cash reflect after 3 Blockchain confirmations.</p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                Is there any minimum amount for withdrawal?
                            </a>

                            <div class="accordion-content">
                                <p>The minimum amount for withdrawal is 1 USD.</p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                How long does it take to process my withdrawal request?
                            </a>

                            <div class="accordion-content">
                                <p>Withdrawals can be requested anytime and processed in less than 24 hours. </p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                How do I Cancel my withdrawal request?
                            </a>

                            <div class="accordion-content">
                                <p>Once the withdrawal request is approved, it can no longer be cancelled. If the
                                    withdrawal has not been approved yet, you can cancel it through your portal, under
                                    Withdraw tab. There, you can see the pending request and cancel it by pressing on
                                    the bin under the Actions tab. </p>
                            </div>
                        </li>

                        <li class="accordion-item">
                            <a class="accordion-title" href="javascript:void(0)">
                                <i class="bx bx-plus"></i>
                                Do you offer a referral commission?
                            </a>

                            <div class="accordion-content">
                                <p>Yes, we do. You earn as high as 10% on every successful referral you make..</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End FAQ Area -->

@include('home.footer')