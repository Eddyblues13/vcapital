@include('home.header')
<!-- End Heder Area -->

<!-- Start Banner Area -->
<section class="banner-area banner-item-bg-1 jarallax" data-jarallax='{"speed": 0.3}'>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-9">
                <div class="banner-text">

                    <h1 class="wow fadeInLeft" data-wow-delay="1s">Get more freedom in the markets</h1>
                    <p class="wow fadeInRight" data-wow-delay="1s">
                        Trade Cryptocurrencies, Stock, Indices, and Forex from a single account



                        <!--At Vault Capital  Ltd, our purpose is to make a difference in the lives of our financial professionals, their clients, and our associates-->.
                    </p>
                    <span class="wow fadeInDown" data-wow-delay="1s"> * Trading in Forex/ CFDs is highly speculative and
                        carries a high level of risk.</span>


                    <div class="banner-btn wow fadeInUp" data-wow-delay="1s">
                        <a class="default-btn" href="{{route('register')}}">
                            Start Now
                        </a>
                        <a class="default-btn active" href="{{route('login')}}">
                            Login
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div>

    <div class="container pt-100">
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="single-features">
                    <h3><i class="bx bx-check-shield"></i> ACTIVE MANAGEMENT</h3>
                    <p>We believe that active management is the responsible way to invest our clients' assets.</p>
                    <span class="bx bx-check-shield"></span>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6">
                <div class="single-features">
                    <h3><i class="bx bx-lock"></i>SAFE AND SECURE</h3>
                    <p>Our Payment gateway is secured with military grade encryption with powerful COMODO SSL.</p>
                    <span class="bx bx-lock"></span>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                <div class="single-features mb-0">
                    <h3><i class="bx bx-certification"></i>INNOVATION</h3>
                    <p>We innovate to give our clients an edge. We deploy modern trading tools on the stock Market.
                    </p>
                    <span class="bx bx-certification"></span>
                </div>
            </div>
        </div>
    </div>

    <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</section>

<!--	<div class="container">
			 <center> <b>WHO WE ARE</b><BR>
			      <video controls autoplay style="width:100%">
  <source src="coin.mp4" type="video/mp4" >
 
</video> </center>
			    
			    </div>-->

<section class="security-area ptb-100">
    <div class="container">
        <div class="section-title">
            <h2>Stock Market</h2>

        </div>
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <script type="text/javascript" src="s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
                async>
                {
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR/USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
            </script>
        </div>
        <!-- TradingView Widget END -->
    </div>

</section>
<section class="approach-area pb-100">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="approach-img">
                    <img src="st.jpg" alt="Image">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="approach-content">
                    <h2>Welcome to Vault Capital</h2>

                    <p style="font-size:12pt;text-align:justify">We are international financial company engaged in
                        investment activities,
                        which are related to stock trading on financial markets using cryptocurrency and exchange
                        performed by qualified professional traders.
                        <br>
                        <!--We understand that everyone has different financial goals. 
							We can help you choose the best strategy to complement your financial needs, 
							support your long-term plans and enhance your personal situation.-->
                    </p>


                </div>
            </div>


        </div>
    </div>
</section>


<section class="approach-area pb-100">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="approach-img">
                    <img src="trade2.gif" alt="Image">
                    <br><!-- TradingView Widget BEGIN -->
                    <!-- TradingView Widget BEGIN -->
                    <div class="tradingview-widget-container">
                        <div class="tradingview-widget-container__widget"></div>
                        <script type="text/javascript"
                            src="s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
                            {
  "symbol": "BINANCE:BTCUSDT",
  "width": 350,
  "colorTheme": "light",
  "isTransparent": false,
  "locale": "en"
}
                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                    <!-- TradingView Widget END -->
                </div>



            </div>

            <div class="col-lg-6">
                <div class="approach-content">
                    <h2>Why Invest With Us ?</h2>
                    <p>We understand that everyone has different financial goals. We can help you choose the best
                        strategy to complement your financial needs, support your long-term plans and enhance your
                        personal situation.</p>

                    <ul>
                        <li>
                            <i class="flaticon-cyber"></i>
                            <h3>Integrity</h3>
                            <p>The interests of members and our fiduciary duties are at the heart of everything we
                                do. </p>
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
<!-- TradingView Widget BEGIN -->
<div class="container">
    <center>
        <h2><b>Vault Capital Stock Market Rates</b></h2>
    </center>
    <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>

        <script type="text/javascript" src="s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"
            async>
            {
  "width": "100%",
  "height": 400,
  "currencies": [
    "EUR",
    "USD",
    "JPY",
    "GBP",
    "CHF",
    "AUD",
    "CAD",
    "NZD",
    "CNY"
  ],
  "isTransparent": false,
  "colorTheme": "light",
  "locale": "en"
}
        </script>
    </div>
</div>
</div>
<!-- TradingView Widget END -->
<!-- End Approach Area -->
<section class="cybersecurity-area ptb-100">
    <div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe
            src="https://widget.coinlib.io/widget?type=chart&amp;theme=light&amp;coin_id=859&amp;pref_coin_id=1505"
            width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"
            style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div>



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
                <div class="approach-img">
                    <img src="forex.png" alt="Image">
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Start Solutions Area -->
<section class="solutions-area pb-70">
    <div class="container">
        <div class="section-title">
            <h2>Responsible Investing</h2>
            <p>We believe that as stewards of your investments, investing responsibly is about the careful execution
                of our investment duties on your behalf.</p>
        </div>

        <div class="row">
            <div class="col-lg-5">
                <div class="single-solutions solutions-time-bg-1">
                    <div class="solutions-content">
                        <h3>Continous Research </h3>
                        <p>We seek to understand the drivers of the risks and opportunities in the market, and what
                            our investment managers are doing to manage them.</p>

                    </div>
                </div>
            </div>

            <div class="col-lg-7">
                <div class="row">
                    <div class="col-lg-6 col-sm-6">
                        <div class="single-solutions solutions-time-bg-2">
                            <div class="solutions-content">
                                <h3>Full Disclosure</h3>
                                <p>We are committed to being transparent trading system regarding to how we manage
                                    our markets, aligning our reports with established standards.</p>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-sm-6">
                        <div class="single-solutions solutions-time-bg-3">
                            <div class="solutions-content">
                                <h3>Due Diligence</h3>
                                <p>We take appropriate actions (that is, how we choose to engage with investment
                                    managers and, where appropriate, seek change).</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>
<!-- End Solutions Area -->


<!-- Start Client Area -->
<section class="approach-area pb-100">
    <div class="container">
        <div class="section-title">
            <h2>Legal Company</h2>

        </div>
        <div class="row align-items-center">


            <div class="col-lg-6">
                <div class="approach-content">
                    <h2>Vault Capital</h2>
                    <p>is officially registered in the United Kingdom Company House With registration number
                        11498630,
                        Suite 2a Blackthorn House, St. Pauls Square, Birmingham, United Kingdom, B3 1RL
                    </p>


                </div>
            </div>
            <div class="col-lg-6">
                <div class="approach-img">
                    <img src="cert.jpg" alt="Image"><br>
                    <br>
                    <center>
                        <a href="https://find-and-update.company-information.service.gov.uk/company/13828662">Verify
                            Certificate</a>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
            {
  "width": "100%",
  "height": 490,
  "defaultColumn": "overview",
  "screener_type": "crypto_mkt",
  "displayCurrency": "USD",
  "colorTheme": "light",
  "locale": "en"
}
        </script>
    </div>
    <!-- TradingView Widget END -->
</section>
<section class="pricing-area-page pt-100 pb-70">
    <div class="container">
        <div class="section-title">
            <h2>Our Investment Plans </h2>
        </div>

        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="single-pricing" style="border:2px solid #0e0129">
                    <div class="pricing-content" style="background-color:#0e0129;">
                        <h3 style="color:white">Deluxe</h3>
                        <h1>3 % Daily </h1>
                    </div>

                    <ul>
                        <li>
                            <i class="bx bx-check"></i>
                            Duration - One month
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Minimum Deposit - <b>$5000</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Maximum Deposit - <b>$9999</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Withdrawal - <b>Instant</b>

                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Loan Limit - <b>$ 3000</b>
                        </li>

                        <li>
                            <i class="bx bx-check"></i>
                            <b>24/7 Customer Support</b>
                        </li>
                    </ul>
                    <a href="{{route('register')}}" class="default-btn">Invest Now</a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="single-pricing" style="border:2px solid #0e0129">
                    <div class="pricing-content" style="background-color:#0e0129;">
                        <h3 style="color:white">Executive</h3>
                        <h1>5 % Daily </h1>
                    </div>

                    <ul>
                        <li>
                            <i class="bx bx-check"></i>
                            Duration - Three months
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Minimum Deposit - <b>$10000</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Maximum Deposit - <b>$49999</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Withdrawal - <b>Instant</b>

                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Loan Limit - <b>$ 5000</b>
                        </li>

                        <li>
                            <i class="bx bx-check"></i>
                            <b>24/7 Customer Support</b>
                        </li>
                    </ul>
                    <a href="{{route('register')}}" class="default-btn">Invest Now</a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="single-pricing" style="border:2px solid #0e0129">
                    <div class="pricing-content" style="background-color:#0e0129;">
                        <h3 style="color:white">DIAMOND</h3>
                        <h1>8 % Daily </h1>
                    </div>

                    <ul>
                        <li>
                            <i class="bx bx-check"></i>
                            Duration - Six months
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Minimum Deposit - <b>$50000</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Maximum Deposit - <b>$5000000</b>
                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Withdrawal - <b>Instant</b>

                        </li>
                        <li>
                            <i class="bx bx-check"></i>
                            Loan Limit - <b>$ </b>
                        </li>

                        <li>
                            <i class="bx bx-check"></i>
                            <b>24/7 Customer Support</b>
                        </li>
                    </ul>
                    <a href="{{route('register')}}" class="default-btn">Invest Now</a>
                </div>
            </div>

        </div>
    </div>
</section>
<section class="client-area ptb-100">
    <div class="container">
        <div class="section-title white-title">
            <h2>What Client’s Say About Us</h2>

        </div>

        <div class="client-wrap owl-carousel owl-theme">
            <div class="single-client">
                <i class="quotes bx bxs-quote-alt-left"></i>
                <p>This company is the REAL DEAL. It is honest, cares about it’s clients, and offers up well vetted
                    offers. They stay on top of our investments and so far has always, each deal has ended with a
                    positive outcome for me. I highly recommend this company so you can count on a positive return
                    on your hard earned money.</p>

                <ul>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                </ul>

                <div class="client-img">
                    <img src="assets/img/client-img/1.jpg" alt="Image">
                    <h3>Jack S</h3>
                    <span>Canada</span>
                </div>
            </div>

            <div class="single-client">
                <i class="quotes bx bxs-quote-alt-left"></i>
                <p>On the recommendation of a friend, I first entered the investment horizon of Vault Capital
                    company in early 2019. As the investment process progressed, the facts proved that my investment
                    return was very punctual and reliable, which made me feel the company’s good qualifications and
                    reputation.</p>

                <ul>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                </ul>

                <div class="client-img">
                    <img src="assets/img/client-img/2.jpg" alt="Image">
                    <h3>Ruokui Z</h3>
                    <span>Brazil</span>
                </div>
            </div>

            <div class="single-client">
                <i class="quotes bx bxs-quote-alt-left"></i>
                <p>Vault Capital provides absolutely incredible service. They are always professional,
                    attentive, and responsive. I have been a customer for a couple years, and plan to be for many
                    more in the future. The information on investments is easy to read and obtain. The website
                    provides quick access to valuable account details.</p>

                <ul>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                </ul>

                <div class="client-img">
                    <img src="assets/img/client-img/3.jpg" alt="Image">
                    <h3>Ben M</h3>
                    <span>Spain</span>
                </div>
            </div>

            <div class="single-client">
                <i class="quotes bx bxs-quote-alt-left"></i>
                <p>Working with my Investment Representative has been a great experience. She has been so
                    informative and patient with me. I love how everything has been explained in detail. So with
                    that said I invested with Vault Capital because it is a good company. I believe I
                    will have a great relationship with them for years to come.</p>

                <ul>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                    <li>
                        <i class="bx bxs-star"></i>
                    </li>
                </ul>

                <div class="client-img">
                    <img src="assets/img/client-img/4.jpg" alt="Image">
                    <h3>Huian</h3>
                    <span>Hong Kong</span>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Client Area -->

<!-- Start Cybersecurity Area -->

<!-- End Cybersecurity Area -->
<!-- Start Pricing Area -->

<!-- End Pricing Area -->
<!-- Strat Blog Area -->
<section class="blog-area pb-70">
    <div class="container">
        <div class="section-title">
            <h2>Key Markets Info</h2>

        </div>


        <div style="height:413px; padding:0px; margin:0px; width: 100%;">
            <iframe
                src="https://widget.coinlib.io/widget?type=full_v2&amp;theme=light&amp;cnt=6&amp;pref_coin_id=1505&amp;graph=yes"
                width="100%" height="409px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"
                style="border:0;margin:0;padding:0;"></iframe>
        </div>


    </div>
</section>
<!-- End Blog Area -->


@include('home.footer')