import React from 'react';

function App() {
  return (
    <div className="font-sans leading-relaxed max-w-7xl mx-auto">
      {/* Full-Width Clickable Image */}
      <div className="w-full my-5">
        <a href="https://www.safepal.com/en/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://imagizer.imageshack.com/img923/2741/5fzOm3.png"
            alt="safepal wallet"
            className="w-full h-auto block"
            loading="eager"
          />
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        <a href="https://welcome-safepal.github.io/en-us/" className="hover:text-blue-600">SafePal Wallet</a>: The Secure Way to Manage Your Crypto
      </h1>

      <div className="border-2 border-gray-200 bg-gray-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">What is the SafePal Wallet?</h2>
        <p><strong>SafePal wallet</strong> is a self-custody, decentralized crypto wallet solution supported by Binance. It offers both mobile and hardware wallet options to securely store and manage multiple crypto assets including Bitcoin, Ethereum, and NFTs.</p>
      </div>

      <div className="border-2 border-green-200 bg-green-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Key Features of the SafePal Wallet</h2>
        <ul className="space-y-2">
          <li>🌍 Supports 100+ blockchains</li>
          <li>🔐 Offline signing via hardware wallet</li>
          <li>📱 User-friendly SafePal app</li>
          <li>🧠 Mnemonic backup system</li>
          <li>💰 Access to staking and DeFi tools</li>
          <li>🎨 NFT storage and browser support</li>
          <li>🧩 Seamless use with SafePal extension</li>
        </ul>
      </div>

      <div className="border-2 border-blue-200 bg-blue-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Why Choose the SafePal Wallet?</h2>
        <p>The wallet is Binance-backed and integrates offline hardware security with online flexibility. It requires no Bluetooth, WiFi, or USB for operation, protecting users from remote attacks.</p>
      </div>

      <div className="border-2 border-yellow-200 bg-yellow-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">How to Set Up the SafePal Wallet</h2>
        <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>Download the app</li>
          <li>Create or import a wallet</li>
          <li>Secure your recovery phrase</li>
          <li>Set up password or biometric login</li>
        </ol>
        <h3 className="text-xl font-semibold mb-2">Hardware Wallet</h3>
        <ol className="list-decimal list-inside">
          <li>Turn on the device and scan QR code</li>
          <li>Write down the seed phrase</li>
          <li>Sync with app using camera only</li>
        </ol>
      </div>

      <div className="border-2 border-gray-300 bg-gray-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Navigating SafePal Login Safely</h2>
        <p>Login is secured with either a password or biometric authentication. For hardware users, there's no direct login, adding a layer of offline protection.</p>
      </div>

      <div className="border-2 border-purple-200 bg-purple-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Using the SafePal App Like a Pro</h2>
        <ul className="space-y-2">
          <li>Real-time portfolio monitoring</li>
          <li>In-app DEX trading</li>
          <li>NFT management tools</li>
          <li>Earn passive income via staking</li>
          <li>Connect with Web3 DApps</li>
        </ul>
      </div>

      <div className="border-2 border-gray-200 bg-white p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">
          <a href="https://welcome-safepal.github.io/en-us/" className="hover:text-blue-600">SafePal Extension</a> for Desktop
        </h2>
        <p>Manage crypto on your desktop with the <strong>SafePal extension</strong>. It allows wallet switching, signing with your hardware wallet, and direct DApp interaction.</p>
      </div>

      <div className="border-2 border-green-200 bg-green-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Security Measures You Can Rely On</h2>
        <ul className="space-y-2">
          <li>EAL 5+ security chip</li>
          <li>Self-destruct if tampered</li>
          <li>Offline cold storage protection</li>
          <li>Biometric and 2FA integration</li>
        </ul>
      </div>

      <div className="border-2 border-red-200 bg-red-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Troubleshooting Tips</h2>
        <ul className="space-y-2">
          <li><strong>Login issue?</strong> Update app or reset credentials</li>
          <li><strong>QR sync problem?</strong> Clean camera and try again</li>
          <li><strong>Failed transaction?</strong> Check blockchain gas fees</li>
        </ul>
      </div>

      <div className="border-2 border-blue-200 bg-blue-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">User Reviews and Community Feedback</h2>
        <blockquote className="italic mb-2">"Finally, a hardware wallet that doesn't cost a fortune!"</blockquote>
        <blockquote className="italic mb-2">"The app interface is slick and easy for newbies."</blockquote>
        <blockquote className="italic">"Love the QR syncing—it's so safe!"</blockquote>
      </div>

      <div className="border-2 border-red-200 bg-red-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Perfect for Beginners</h2>
        <p>SafePal is beginner-friendly with a clean UI, direct access to staking, and support for all major coins.</p>
      </div>

      <div className="border-2 border-gray-200 bg-gray-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Tips to Maximize Your Wallet Use</h2>
        <ul className="space-y-2">
          <li>Back up your recovery phrase securely</li>
          <li>Use both the hardware and app wallets</li>
          <li>Enable biometric login and 2FA</li>
          <li>Keep the app updated</li>
        </ul>
      </div>

      <div className="border-2 border-green-200 bg-green-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
        <p>The <strong><a href="https://welcome-safepal.github.io/en-us/" className="hover:text-blue-600">SafePal Wallet</a></strong> is a secure, flexible, and powerful tool for managing crypto. Whether you're using the app, hardware device, or extension, you stay in full control—backed by top-tier security practices.</p>
      </div>

      <div className="border-2 border-yellow-200 bg-yellow-50 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">FAQs</h2>
        <div className="space-y-4">
          <div>
            <p><strong>Is the SafePal wallet safe to use?</strong><br />Yes, it's one of the most secure wallets using air-gapped tech.</p>
          </div>
          <div>
            <p><strong>Can I use SafePal on desktop?</strong><br />Yes, via the SafePal extension for Chrome.</p>
          </div>
          <div>
            <p><strong>How do I recover my wallet?</strong><br />Use your 12/24-word seed phrase.</p>
          </div>
          <div>
            <p><strong>Is SafePal free?</strong><br />The app is free, hardware wallet requires a one-time purchase.</p>
          </div>
          <div>
            <p><strong>Does it support NFTs?</strong><br />Absolutely! You can store and manage NFTs in-app.</p>
          </div>
          <div>
            <p><strong>Do I need both wallet versions?</strong><br />No, but using both adds enhanced security.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;