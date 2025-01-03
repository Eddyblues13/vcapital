@include('home.header')

<!-- Start Page Title Area -->
<div class="page-title-area bg-1">
    <div class="container">
        <div class="page-title-content">
            <h2>Investment Plans</h2>
            <ul>
                <li>
                    <a href="{{url('/')}}">
                        Home
                    </a>
                </li>

                <li class="active">Plans</li>
            </ul>
        </div>
    </div>
</div>
<!-- End Page Title Area -->

<!-- Start Pricing Area -->
<section class="pricing-area-page pt-100 pb-70">
    <div class="container">
        <div class="section-title">
            <h2>Our Investment Plans </h2>
        </div>

        <div class="row">





 
            @foreach($plans as $plan)
            <div class="col-lg-4 col-sm-6">
                <div class="single-pricing" style="border:2px solid #0e0129">
                    <div class="pricing-content" style="background-color:#0e0129;">
                        <h3 style="color:white">{{ $plan->name }}</h3>

                    </div>

                    <ul>
                        <li>
                            <i class="bx bx-check"></i>
                            Duration - {{ $plan->duration }}
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Minimum Deposit - <b>${{ number_format($plan->min_amount, 2) }}</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Maximum Deposit - <b>${{ number_format($plan->max_amount, 2) }}</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Withdrawal - <b>Instant</b>
                        </li>

                        <li>
                            <i class="bx bx-check"></i>
                            <b>24/7 Customer Support</b>
                        </li>
                    </ul>
                    <a href="{{ route('register') }}" class="default-btn">Invest Now</a>
                </div>
            </div>
            @endforeach





        </div>
    </div>
</section>
<!-- End Pricing Area -->



<!-- Start Cybersecurity Area -->
<section class="cybersecurity-area ptb-100">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="cybersecurity-content">
                    <h2>Our Methodology</h2>
                    <p>We believe the dynamic nature of investment markets, coupled with our expertise, lets us add
                        value over and above the markets we operate in. For many of our funds, we aim for investment
                        returns above those of the relevant market index. Put simply, we aim to outperform the
                        benchmark.</p>

                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <ul class="cybersecurity-item">
                                <li>
                                    <i class="bx bx-check"></i>
                                    Client Oriented
                                </li>
                                <li>
                                    <i class="bx bx-check"></i>
                                    Timely Transactions
                                </li>
                                <li>
                                    <i class="bx bx-check"></i>
                                    Consistent Returns
                                </li>


                            </ul>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <ul>
                                <li>
                                    <i class="bx bx-check"></i>
                                    Secure Web Platform
                                </li>
                                <li>
                                    <i class="bx bx-check"></i>
                                    Professional Support
                                </li>
                                <li>
                                    <i class="bx bx-check"></i>
                                    User Friendly
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 pr-0">
                <div class="cybersecurity-img"></div>
            </div>
        </div>
    </div>
</section>
<!-- End Cybersecurity Area -->





<!-- Start Approach Area -->
<section class="approach-area pb-100">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="approach-img">
                    <img src="../assets/img/approach-img.jpg" alt="Image">
                </div>
            </div>

            <div class="col-lg-6">
                <div class="approach-content">
                    <h2>Financial Wellness on demand</h2>
                    <p>We understand that everyone has different financial goals. We can help you choose the best
                        strategy to complement your financial needs, support your long-term plans and enhance your
                        personal situation.</p>

                    <ul>
                        <li>
                            <i class="flaticon-cyber"></i>
                            <h3>Integrity</h3>
                            <p>The interests of members and our fiduciary duties are at the heart of everything we do.
                            </p>
                        </li>

                        <li>
                            <i class="flaticon-cyber-security"></i>
                            <h3>Focus</h3>
                            <p>We strive to offer meaningful responsible investment strategies to help support
                                investment choices.</p>
                        </li>

                        <li>
                            <i class="flaticon-profile"></i>
                            <h3>Understanding</h3>
                            <p>We listen carefully to all sides of the conversation to continually deepen our
                                understanding. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Approach Area -->
@include('home.footer')