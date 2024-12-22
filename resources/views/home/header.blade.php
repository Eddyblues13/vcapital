<!doctype html>
<html lang="zxx">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <title>Vault Capital</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="bingbot" content="noindex, nofollow">
    <meta name="scam-advisor" content="noindex, nofollow">
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{asset('asset/images/favicon.ico')}}">
    <meta name="description"
        content="Vault Capital Limited is a recognized leader in online Cryptocurrency trading and stock Market exchange with years of experience and a global presence. Our platform has everything you need to become an effective trader.">

    <!-- Open Graph tags for better social sharing -->
    <meta property="og:site_name" content="Vault Capital Limited" />
    <meta property="og:title" content="Welcome to Vault Capital and Investment Limited" />
    <meta property="og:description"
        content="Vault Capital Limited is a recognized leader in online Cryptocurrency trading and stock Market exchange with years of experience and a global presence. Our platform has everything you need to become an effective trader." />
    <meta property="og:image" content="{{ asset('assets/img/social_image.jpg') }}" /> <!-- Update the image path -->
    <meta property="og:url" content="{{ url('/') }}" /> <!-- Correct the URL -->
    <meta property="og:type" content="article" />
    <meta name="theme-color" content="#ffffff">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/boxicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/meanmenu.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/nice-select.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/odometer.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}">
    <link rel="icon" type="image/png" href="{{ asset('assets/img/favicon.png') }}">

    <style type="text/css">
        /* Google Translate Custom Styles */
        #google_translate_element select {
            background: #f6edfd;
            color: #383ffa;
            border: none;
            border-radius: 3px;
            padding: 6px 8px;
        }

        /* Hiding Google Translate Branding */
        .goog-logo-link,
        .goog-te-gadget {
            display: none !important;
        }

        .goog-text-highlight {
            background: none !important;
            box-shadow: none !important;
        }

        body {
            top: 0 !important;
        }
    </style>

</head>

<body>
    <!-- Preloader Area -->
    <div class="loader-wrapper">
        <div class="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>

    <!-- Header Area -->
    <header class="header-area fixed-top">
        <div class="top-header-area">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-8">
                        <div id="google_translate_element"></div>
                        <script>
                            function googleTranslateElementInit() {
                                new google.translate.TranslateElement({
                                    pageLanguage: 'en',
                                    autoDisplay: 'true',
                                    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
                                }, 'google_translate_element');
                            }
                        </script>
                        <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cryptocurrency Widget -->
        <div style="height: 40px; padding: 0; margin: 0; width: 100%;">
            <iframe
                src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
                width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"
                style="border:0; margin:0; padding:0;"></iframe>
        </div>

        <!-- Navbar Area -->
        <div class="nav-area">
            <div class="navbar-area">
                <!-- Mobile Menu -->
                <div class="mobile-nav">
                    <a href="{{ url('/') }}" class="logo">
                        <img src="{{ asset('logo.png') }}" alt="Logo" style="height:45px;">
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="main-nav">
                    <nav class="navbar navbar-expand-md">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="{{ url('/') }}">
                                <img src="{{ asset('logo.png') }}" alt="Logo" style="height:45px;">
                            </a>
                            <div class="collapse navbar-collapse mean-menu">
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item"><a href="{{url('/')}}" class="nav-link">Home</a></li>
                                    <li class="nav-item"><a href="{{ url('/about-us') }}" class="nav-link">About Us</a>
                                    </li>
                                    <li class="nav-item"><a href="{{ url('/copy-trading') }}" class="nav-link">Copy
                                            Trading</a>
                                    </li>
                                    <li class="nav-item"><a href="{{ url('/plan') }}" class="nav-link">Investments</a>
                                    </li>

                                    <li class="nav-item"><a href="{{ url('/faqs') }}" class="nav-link">Frequently
                                            Asked</a></li>
                                    <li class="nav-item"><a href="{{ url('/terms') }}" class="nav-link">Terms of
                                            Service</a></li>
                                    <li class="nav-item"><a href="{{ url('/contact') }}" class="nav-link">Contact Us</a>
                                    </li>
                                    <li class="nav-item"><a href="{{ route('register') }}" class="nav-link">Register</a>
                                    </li>
                                    <li class="nav-item"><a href="{{ route('login') }}" class="nav-link">Login</a></li>
                                    <li class="nav-item">
                                        <div id="ytWidget"></div>
                                        <script
                                            src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=dark&autoMode=true"
                                            type="text/javascript"></script>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- End of Header Area -->