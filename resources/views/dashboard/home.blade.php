@include('dashboard.header')
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">


<style type="text/css">
  /* General Content Styling */
  #content {
    width: 100%;
    transition: all 0.3s;
    margin-top: 60px;
    margin-left: var(--sidebar-width);
  }

  #content.full-width {
    margin-left: 0;
  }

  /* Navigation Links */
  .nav-link {
    color: #8b949e;
    padding: 0.75rem 1rem;
    margin: 0.25rem 0;
    border-radius: 0.5rem;
  }

  .nav-link:hover,
  .nav-link.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  /* Warning Bar Styling */
  .kyc-warning {
    /* Black text for readability */
    text-align: center;
    width: 90%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 2px solid #d39e00;
  }

  .kyc-warning a {
    color: #0056b3;
    text-decoration: underline;
    font-weight: bold;
  }

  .kyc-warning a:hover {
    color: #004085;
  }

  /* Trading Card Styling */
  .trading-card {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('{{asset("assets/img/candle.jpg")}}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #0d1117;
    border-radius: 10px;
  }

  .card {
    min-height: 100px;
    /* Ensuring all cards have a minimum height */
  }

  .card-body img {
    max-width: 80px;
    /* Consistent image size */
    margin-bottom: 15px;
  }

  .card-body h5,
  .card-body p {
    margin-bottom: 10px;
    /* Consistent spacing */
  }
</style>


<!-- Page Content -->
<div class="content-page">
  <div class="content">

    <!-- Start Content-->
    <div class="container-fluid">

      @if ($kyc_required)
      <div class="small-card card widget-flat my-4 kyc-warning">
        <p class="text-center">
          You have an important task left! Verify your account to use all Vault Capital services.
          <a class="btn btn-danger" href="{{ route('user.kyc.form') }}">Verify Account</a>
        </p>
      </div>
      @else
      <div class="small-card card widget-flat my-4 kyc-verified">
        <p class="text-center">
          <span class="text-success">
            <i class="fas fa-check-circle"></i> Your account is <strong>Verified</strong>!
          </span>
        </p>
      </div>
      @endif




      <!-- Trading Card -->
      <div class="small-card card widget-flat my-4">
        <div class="trading-card p-3">
          <h2 class="text-center text-white">${{ number_format($total_sum, 2) }}</h2>
          <p class="text-center text-white"><small>TRADING BALANCE</small></p>
          <div class="progress mb-2">
            <div class="progress-bar" style="width: {{Auth::user()->signal_strength}}%;"></div>
          </div>
          <p class="text-center text-white"><small>SIGNAL STRENGTH</small></p>
          <div class="row g-2">
            <div class="col-6">
              <a href="{{ route('user.deposit') }}" class="btn btn-outline-primary w-100">ADD FUNDS</a>
            </div>
            <div class="col-6">
              <a href="{{ route('user.copy.trader.page') }}" class="btn btn-outline-primary w-100">MY
                TRADERS (0)</a>
            </div>
          </div>
        </div>
      </div>

      <!-- TradingView Widget -->
      <div class="small-card card widget-flat my-4">
        <script type="text/javascript"
          src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js" async>
          {
  "symbols": [
    [
      "Bitcoin",
      "BITSTAMP:BTCUSD|1D"
    ],
    [
      "Bitcoin",
      "COINBASE:BTCUSD|1D"
    ],
    [
      "Bitcoin",
      "BINANCE:BTCUSDT|1D"
    ]
  ],
  "chartOnly": false,
  "width": "100%",
  "height": 250,
  "locale": "en",
  "colorTheme": "dark",
  "autosize": false,
  "showVolume": false,
  "hideDateRanges": false,
  "hideMarketStatus": false,
  "hideSymbolLogo": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  "fontSize": "10",
  "noTimeScale": false,
  "valuesTracking": "1",
  "changeMode": "price-and-percent",
  "chartType": "line"
}
        </script>

      </div>




      <!-- TradingView Widget -->
      <div class="small-card card widget-flat my-4">
        <div class="row g-2">
          <div class="col-6">

            <div class="dropdown">
              <button class="btn btn-outline-primary w-100 dropdown-toggle mb-3" type="button" id="buyCryptoButton"
                data-bs-toggle="dropdown" aria-expanded="false" style="font-size: 14px; padding: 10px 20px;">
                Buy Crypto
              </button>

              <ul class="dropdown-menu" aria-labelledby="buyCryptoButton">
                <li><a class="dropdown-item" href="https://www.binance.com/" target="_blank">Binance</a>
                </li>
                <li><a class="dropdown-item" href="https://www.coinbase.com/" target="_blank">Coinbase</a>
                </li>
                <li><a class="dropdown-item" href="https://www.kraken.com/" target="_blank">Kraken</a></li>
                <li><a class="dropdown-item" href="https://www.crypto.com/" target="_blank">Crypto.com</a>
                </li>
                <li><a class="dropdown-item" href="https://www.bitfinex.com/" target="_blank">Bitfinex</a>
                </li>
              </ul>



            </div>
          </div>
          <div class="col-6">
            <a href="{{ route('user.copy.trader.page') }}" class="btn btn-outline-primary w-100">Copy
              Trade</a>
          </div>
        </div>

      </div>
      <!-- Profile Tabs -->

      <!-- TradingView Widget -->
      <div class="small-card card widget-flat my-4">
        <ul class="nav nav-tabs d-flex flex-sm-row justify-content-between mt-3">
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#closed">
              <i class="bi bi-hourglass-top"></i> Closed
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#active">
              <i class="bi bi-hourglass"></i> Active
            </a>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content mt-3">
          <!-- Active Trades -->
          <div class="tab-pane fade show active" id="active">
            @if ($open_trades->isEmpty())
            <div class="text-center py-4">
              <p>No open trades available.</p>
            </div>
            @else
            @foreach ($open_trades as $trade)
            @php
            // Capitalize company name
            // Convert company name to uppercase
            $companyName = strtoupper($trade->company);


            // Determine logo URL dynamically
            $logoBaseUrl = 'https://cryptologos.cc/logos/';
            $logoPath = '';

            // Check company type (crypto, stocks, or default)
            if (in_array($companyName, ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano', 'Dogecoin'])) {
            // Replace spaces and lowercase for crypto logos
            $logoPath = $logoBaseUrl . strtolower(str_replace(' ', '-', $companyName)) . '-logo.png';
            } elseif (in_array($companyName, ['Amazon', 'Apple', 'Tesla', 'Microsoft', 'Google'])) {
            // Use stock logos from external resources (example URL)
            $logoPath = "https://logo.clearbit.com/" . strtolower($companyName) . ".com";
            } else {
            // Fallback placeholder
            $logoPath = 'https://placehold.co/50x50?text=' . urlencode($companyName);
            }
            @endphp

            <div class="trade-item d-flex justify-content-between align-items-center">
              <div>
                <img src="{{ $logoPath }}" alt="{{ $companyName }}" width="30"
                  onerror="this.src='https://placehold.co/50x50?text=NA'">
                <span>BUY {{ number_format($trade->amount, 4) }} {{ $companyName }}</span><br>
                <small>{{ $trade->asset }}</small>
              </div>
              <span class="text-success">${{ number_format($trade->take_profit, 2) }}</span>
            </div>
            @endforeach
            @endif
          </div>

          <!-- Closed Trades -->
          <div class="tab-pane fade" id="closed">
            @if ($closed_trades->isEmpty())
            <div class="text-center py-4">
              <p>No closed trades available.</p>
            </div>
            @else
            @foreach ($closed_trades as $trade)
            @php
            // Capitalize company name
            // Convert company name to uppercase
            $companyName = strtoupper($trade->company);

            // Determine logo URL dynamically
            $logoBaseUrl = 'https://cryptologos.cc/logos/';
            $logoPath = '';

            // Check company type (crypto, stocks, or default)
            if (in_array($companyName, ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano', 'Dogecoin'])) {
            // Replace spaces and lowercase for crypto logos
            $logoPath = $logoBaseUrl . strtolower(str_replace(' ', '-', $companyName)) . '-logo.png';
            } elseif (in_array($companyName, ['Amazon', 'Apple', 'Tesla', 'Microsoft', 'Google'])) {
            // Use stock logos from external resources (example URL)
            $logoPath = "https://logo.clearbit.com/" . strtolower($companyName) . ".com";
            } else {
            // Fallback placeholder
            $logoPath = 'https://placehold.co/50x50?text=' . urlencode($companyName);
            }
            @endphp

            <div class="trade-item d-flex justify-content-between align-items-center">
              <div>
                <img src="{{ $logoPath }}" alt="{{ $companyName }}" width="30"
                  onerror="this.src='https://placehold.co/50x50?text=NA'">
                <span>BUY {{ number_format($trade->amount, 4) }} {{ $companyName }}</span><br>
                <small>{{ $trade->asset }}</small>
              </div>
              <span class="text-danger">${{ number_format($trade->take_profit, 2) }}</span>
            </div>
            @endforeach
            @endif
          </div>
        </div>
      </div>

      <!-- Custom CSS -->
      <style>
        .trade-item {
          border-bottom: 1px solid #ccc;
          padding: 10px 0;
        }

        .text-success {
          color: #00FF00;
          font-weight: bold;
        }

        .text-danger {
          color: #FF0000;
          font-weight: bold;
        }

        small {
          color: #999;
        }

        img {
          border-radius: 50%;
        }
      </style>




    </div>


  </div>
  <!-- end row -->

</div>
<!-- container -->

@include('dashboard.footer')
<script>
  function toggleTradeStatus(status) {
        if (status === 'open') {
            document.getElementById('openTrades').style.display = 'block';
            document.getElementById('closedTrades').style.display = 'none';
        } else if (status === 'closed') {
            document.getElementById('openTrades').style.display = 'none';
            document.getElementById('closedTrades').style.display = 'block';
        }
    }
</script>