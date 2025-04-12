import React, { useState } from 'react';

// Custom icon components using inline SVGs
const ChevronDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const CheckCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

function AmazonPrimeTestingApp() {
  const [expandedSections, setExpandedSections] = useState({
    delivery: true,
    streaming: false,
    shopping: false,
    reading: false,
    medical: false,
    other: false,
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const TestCase = ({ title, preconditions, steps, expectedResults, priority = "Medium" }) => {
    const [expanded, setExpanded] = useState(false);
    
    const priorityBadge = () => {
      switch(priority) {
        case "High":
          return <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">High</span>;
        case "Medium":
          return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Medium</span>;
        case "Low":
          return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Low</span>;
        default:
          return null;
      }
    };
    
    return (
      <div className="border rounded-md mb-4 shadow-sm">
        <div 
          className="flex justify-between items-center p-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center">
            <h4 className="font-medium">{title}</h4>
            <div className="ml-3">{priorityBadge()}</div>
          </div>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {expanded && (
          <div className="p-4 bg-white">
            <div className="mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-1">Preconditions:</h5>
              <ul className="list-disc pl-5 text-sm">
                {preconditions.map((condition, idx) => (
                  <li key={idx}>{condition}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-1">Test Steps:</h5>
              <ol className="list-decimal pl-5 text-sm">
                {steps.map((step, idx) => (
                  <li key={idx} className="mb-1">{step}</li>
                ))}
              </ol>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-gray-700 mb-1">Expected Results:</h5>
              <ul className="pl-1 text-sm">
                {expectedResults.map((result, idx) => (
                  <li key={idx} className="flex items-start mb-1">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Section = ({ title, children, id }) => (
    <div className="mb-8">
      <div 
        className="flex justify-between items-center p-4 bg-blue-100 rounded-t-lg cursor-pointer"
        onClick={() => toggleSection(id)}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        {expandedSections[id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>
      
      {expandedSections[id] && (
        <div className="p-4 border border-t-0 rounded-b-lg bg-white">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Amazon Prime Black Box Testing Scenarios</h1>
        <p className="text-gray-600">
          Comprehensive test cases for Amazon Prime benefits and features
          <a 
            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=G6LDPN7YJHYKH2J6#:~:text=Buy%20with%20Prime%3A%20Enjoy%20Prime,participating%20online%20stores%20beyond%20Amazon."
            className="ml-2 inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Reference Link
          </a>
        </p>
      </header>
      
      <main>
        <Section title="Delivery Benefits" id="delivery">
          <TestCase 
            title="FREE Two-Day Delivery Eligibility Check"
            priority="High"
            preconditions={[
              "User has an active Prime membership",
              "Test items are marked as 'Prime eligible'",
              "User has a valid delivery address"
            ]}
            steps={[
              "Log into the Amazon account with Prime membership",
              "Search for an item marked with the Prime badge",
              "Add the item to the cart",
              "Proceed to checkout",
              "Choose the 'FREE Two-Day Shipping' option",
              "Complete the order"
            ]}
            expectedResults={[
              "Two-Day Shipping option is available at no extra cost",
              "Estimated delivery date should be within 2 business days",
              "Order confirmation shows the correct shipping method and delivery estimate"
            ]}
          />
          
          <TestCase 
            title="FREE One-Day Delivery Eligibility by Location"
            priority="High"
            preconditions={[
              "User has an active Prime membership",
              "Test with multiple delivery addresses in different zip codes",
              "Item is eligible for One-Day delivery"
            ]}
            steps={[
              "Log into the Amazon account with Prime membership",
              "Add a delivery address in a major metropolitan area",
              "Search for an item eligible for One-Day delivery",
              "Add the item to the cart and proceed to checkout",
              "Note the shipping options available",
              "Change the delivery address to a rural location",
              "Note any changes in shipping options",
              "Repeat with suburban and other geographic locations"
            ]}
            expectedResults={[
              "One-Day delivery option appears for eligible locations",
              "System correctly identifies when One-Day delivery is not available based on location",
              "Appropriate alternative shipping options are provided when One-Day is unavailable",
              "Delivery promise is accurate for the selected location"
            ]}
          />
          
          <TestCase 
            title="FREE Same-Day Delivery Minimum Threshold Testing"
            priority="Medium"
            preconditions={[
              "User has an active Prime membership",
              "User's delivery address is in an eligible zip code for Same-Day delivery",
              "Multiple items with varying prices are available for testing"
            ]}
            steps={[
              "Log into the Amazon account with Prime membership",
              "Search for items eligible for Same-Day delivery",
              "Add items to cart with total value below the minimum threshold",
              "Proceed to checkout and note shipping options",
              "Return to cart and add more items to exceed the minimum threshold",
              "Proceed to checkout again and note shipping options",
              "Test with different combinations of items to determine threshold behavior"
            ]}
            expectedResults={[
              "Same-Day delivery is unavailable when cart total is below the minimum threshold",
              "Same-Day delivery becomes available when minimum threshold is met",
              "System clearly communicates how much more needs to be added to qualify for Same-Day delivery",
              "Threshold calculation correctly includes only eligible items"
            ]}
          />
          
          <TestCase 
            title="Amazon Key Garage Delivery Compatibility"
            priority="Medium"
            preconditions={[
              "User has an active Prime membership",
              "User has registered for Amazon Key service",
              "User has compatible smart garage door opener",
              "Item is eligible for Key delivery"
            ]}
            steps={[
              "Log into the Amazon account with Prime membership",
              "Select an item eligible for Amazon Key delivery",
              "Add the item to the cart",
              "Proceed to checkout",
              "Select 'Key Delivery to Garage' as the delivery option",
              "Complete the order",
              "Track the delivery process",
              "Verify garage access at time of delivery"
            ]}
            expectedResults={[
              "Key Delivery option is available at checkout",
              "Order confirmation shows Key Delivery has been selected",
              "Delivery notifications include Key-specific updates",
              "Delivery driver is able to access the garage using the system",
              "Package is securely delivered inside the garage",
              "User receives confirmation that delivery is complete and garage is closed"
            ]}
          />
          
          <TestCase 
            title="No-Rush Shipping Reward Accumulation"
            priority="Low"
            preconditions={[
              "User has an active Prime membership",
              "Item is eligible for both expedited and No-Rush shipping",
              "User has not accumulated No-Rush rewards recently"
            ]}
            steps={[
              "Log into the Amazon account with Prime membership",
              "Add eligible item to cart",
              "Proceed to checkout",
              "Select 'No-Rush Shipping' option",
              "Note the reward offered",
              "Complete the order",
              "Check account for reward credit",
              "Repeat process for multiple orders to test accumulation"
            ]}
            expectedResults={[
              "No-Rush Shipping option is presented with clear description of reward",
              "Order confirmation shows correct shipping method and expected delivery date",
              "Reward is properly credited to account after delivery",
              "Multiple No-Rush orders correctly accumulate rewards",
              "Rewards are applied correctly when used for qualifying future purchases"
            ]}
          />
        </Section>
        
        <Section title="Streaming and Digital Benefits" id="streaming">
          <TestCase 
            title="Prime Video Content Access Verification"
            priority="High"
            preconditions={[
              "User has an active Prime membership",
              "User has access to multiple devices (mobile, desktop, smart TV)",
              "Test various content types (movies, series, Amazon Originals)"
            ]}
            steps={[
              "Log into Prime Video using Prime account credentials",
              "Browse content labeled as 'Included with Prime'",
              "Attempt to play various types of included content",
              "Note any access restrictions or limitations",
              "Test access to premium content that requires additional purchase",
              "Attempt to access content across different devices",
              "Test download functionality for offline viewing on mobile devices"
            ]}
            expectedResults={[
              "All content marked as 'Included with Prime' plays without additional charges",
              "Premium content is clearly marked as requiring additional purchase",
              "Consistent access to included content across all supported devices",
              "Content eligible for download can be saved for offline viewing",
              "Playback quality adapts appropriately to device capabilities and network conditions"
            ]}
          />
          
          <TestCase 
            title="Amazon Music Free Tier Limitations"
            priority="Medium"
            preconditions={[
              "User has an active Prime membership",
              "User has not subscribed to Amazon Music Unlimited",
              "Testing on both mobile app and web player"
            ]}
            steps={[
              "Log into Amazon Music using Prime account credentials",
              "Browse music library and playlists",
              "Attempt to play songs from various playlists",
              "Test on-demand playback functionality",
              "Test playlist creation and customization",
              "Attempt to skip tracks multiple times",
              "Test offline download functionality",
              "Compare available features with Amazon Music Unlimited promotion pages"
            ]}
            expectedResults={[
              "Prime Music provides access to the advertised catalog size",
              "Ad-free playback experience is provided",
              "Any playback limitations (such as shuffle-only for certain content) are clearly communicated",
              "Skip limits are enforced according to terms",
              "Offline listening functions for permitted content",
              "Features exclusive to Amazon Music Unlimited are properly restricted"
            ]}
          />
          
          <TestCase 
            title="Prime Gaming Monthly Content Refresh"
            priority="Medium"
            preconditions={[
              "User has an active Prime membership",
              "User has linked their Amazon account to Twitch",
              "Testing performed across multiple months"
            ]}
            steps={[
              "Log into Prime Gaming using Amazon credentials",
              "Document all available free games and in-game content for current month",
              "Claim several free games and in-game items",
              "Verify access to claimed content",
              "Wait until the next month's content refresh",
              "Document newly available content",
              "Verify previously claimed content remains accessible",
              "Attempt to claim newly available content"
            ]}
            expectedResults={[
              "New content is made available on the expected schedule",
              "Previously claimed content remains accessible after the refresh",
              "Claimed games can be downloaded and played without issues",
              "In-game content can be redeemed in the associated games",
              "Twitch channel subscription benefit can be used each month"
            ]}
          />
          
          <TestCase 
            title="Amazon Photos Storage Limit Testing"
            priority="Low"
            preconditions={[
              "User has an active Prime membership",
              "Test with various file types (JPEG, PNG, RAW, etc.)",
              "Multiple file sizes available for testing"
            ]}
            steps={[
              "Log into Amazon Photos with Prime account",
              "Upload various photo file types in different formats",
              "Upload a large batch of photos to test bulk handling",
              "Upload very large individual photo files",
              "Attempt to upload non-photo files",
              "Upload videos to test the 5GB video storage limit",
              "Exceed the 5GB video storage limit and observe behavior",
              "Test access to uploaded content across multiple devices"
            ]}
            expectedResults={[
              "Unlimited photo storage functions as expected regardless of quantity",
              "All supported photo formats are stored at original quality",
              "System correctly identifies and rejects unsupported file types",
              "Video uploads are permitted up to the 5GB limit",
              "Clear notification is provided when approaching or exceeding video storage limit",
              "Uploaded content is accessible across all devices and platforms"
            ]}
          />
        </Section>
        
        <Section title="Shopping Benefits" id="shopping">
          <TestCase 
            title="Prime Day Access Verification"
            priority="High"
            preconditions={[
              "Testing during Prime Day event period",
              "Multiple accounts: Prime member, non-Prime user, expired Prime membership"
            ]}
            steps={[
              "Access Amazon during Prime Day with active Prime account",
              "Browse Prime Day deals and attempt to purchase",
              "Log out and access with non-Prime account",
              "Attempt to view and purchase Prime Day deals",
              "Log in with expired Prime account",
              "Observe deal visibility and purchase options",
              "Test Lightning Deals access timing with both Prime and non-Prime accounts"
            ]}
            expectedResults={[
              "Prime members can view and purchase all Prime Day deals",
              "Non-Prime users cannot access Prime-exclusive deals",
              "Non-Prime users see prompts to join Prime to access deals",
              "Expired Prime accounts are treated as non-Prime",
              "Prime members get early access to Lightning Deals as advertised",
              "Deal inventory and purchase limitations are correctly enforced"
            ]}
          />
          
          <TestCase 
            title="Prime Exclusive Discounts at Whole Foods Market"
            priority="Medium"
            preconditions={[
              "User has an active Prime membership",
              "User has Amazon app installed with Whole Foods integration",
              "Testing can be performed in a physical Whole Foods store"
            ]}
            steps={[
              "Set up Prime account with Whole Foods integration in Amazon app",
              "Visit Whole Foods store and identify Prime-exclusive discounted items",
              "Scan QR code at checkout to apply Prime benefits",
              "Complete purchase and review receipt for discounts",
              "Test the additional 10% off on sale items",
              "Test special weekly Prime member deals",
              "Compare online advertised discounts with in-store experience"
            ]}
            expectedResults={[
              "Prime member QR code is recognized at checkout",
              "Prime-exclusive discounts are correctly applied",
              "Additional 10% discount is applied to eligible sale items",
              "Weekly deals are available as advertised",
              "Receipt clearly indicates Prime savings",
              "In-store Prime deals match those advertised online",
              "Prime status is correctly tied to Amazon account"
            ]}
          />
          
          <TestCase 
            title="Prime Card 5% Cashback Calculation"
            priority="High"
            preconditions={[
              "User has an active Prime membership",
              "User has linked Prime Visa card",
              "Test with various product categories and purchase amounts"
            ]}
            steps={[
              "Make purchase on Amazon.com using Prime Visa card",
              "Make purchase at Whole Foods using Prime Visa card",
              "Make purchase at Amazon Fresh using Prime Visa card",
              "Make purchase at non-Amazon retailer using same card",
              "Review cashback calculations for each transaction",
              "Test with partial gift card payments to verify cashback on remainder",
              "Test during promotional periods with enhanced cashback rates"
            ]}
            expectedResults={[
              "5% cashback is correctly calculated on eligible Amazon purchases",
              "5% cashback is correctly applied on Whole Foods purchases",
              "5% cashback is correctly applied on Amazon Fresh purchases",
              "Standard rate cashback is applied on non-Amazon purchases",
              "Cashback is calculated only on the portion paid with the Prime Visa",
              "Enhanced cashback rates during promotions are correctly applied",
              "Cashback appears in statement and rewards balance within expected timeframe"
            ]}
          />
          
          <TestCase 
            title="Prime Early Access for Lightning Deals"
            priority="Medium"
            preconditions={[
              "User has active Prime membership",
              "Lightning Deals are available during testing period",
              "Compare with non-Prime account"
            ]}
            steps={[
              "Log in with Prime account",
              "Browse upcoming Lightning Deals",
              "Note the start time for specific deals",
              "Attempt to access deals 30 minutes before public availability",
              "Log in with non-Prime account",
              "Attempt to access same deals before public availability",
              "Test high-demand deals that may sell out during early access period"
            ]}
            expectedResults={[
              "Prime members can access Lightning Deals 30 minutes before general availability",
              "Non-Prime users are blocked from early access",
              "Clear countdown timer shows when deals become available for each user type",
              "Prime early access is applied consistently across all eligible Lightning Deals",
              "System handles high-demand deals correctly during transition from Prime-only to public access"
            ]}
          />
        </Section>
        
        <Section title="Reading Benefits" id="reading">
          <TestCase 
            title="Prime Reading Catalog Access"
            priority="Medium"
            preconditions={[
              "User has active Prime membership",
              "Testing on Kindle device, Kindle app, and web reader",
              "Compare with non-Prime account"
            ]}
            steps={[
              "Log in with Prime account",
              "Browse Prime Reading catalog",
              "Borrow maximum allowed titles (10)",
              "Attempt to borrow additional titles",
              "Return one title and borrow another",
              "Test reading borrowed books across multiple devices",
              "Log in with non-Prime account and attempt to access Prime Reading"
            ]}
            expectedResults={[
              "Prime Reading catalog is accessible with Prime membership",
              "Borrowing limit of 10 titles is enforced",
              "System prevents borrowing beyond the limit",
              "Returning a book frees up a slot for a new borrow",
              "Borrowed books can be read across all supported devices",
              "Non-Prime users cannot access Prime Reading catalog for free",
              "Reading progress syncs correctly between devices"
            ]}
          />
          
          <TestCase 
            title="Amazon First Reads Monthly Selection"
            priority="Low"
            preconditions={[
              "User has active Prime membership",
              "Testing performed during multiple months",
              "Compare with non-Prime account"
            ]}
            steps={[
              "Log in with Prime account at the beginning of a new month",
              "Access Amazon First Reads section",
              "Review available book selections",
              "Select one book as free Prime benefit",
              "Attempt to select additional free books",
              "Log in with non-Prime account",
              "Check pricing for same titles",
              "Wait until next month and test selection refresh"
            ]}
            expectedResults={[
              "Prime members can select one free book per month",
              "Selection refreshes with new titles each month",
              "System prevents claiming more than one free book per month",
              "Non-Prime users see discounted ($1.99) pricing instead of free",
              "Selected book is permanently added to user's Kindle library",
              "Previous months' selections are no longer available for free when new month begins"
            ]}
          />
          
          <TestCase 
            title="Audible Narration Functionality"
            priority="Medium"
            preconditions={[
              "User has active Prime membership",
              "Testing with books that have 'Read and Listen Free' feature",
              "Testing across Kindle app and Audible app"
            ]}
            steps={[
              "Log in with Prime account",
              "Find a book with 'Read and Listen Free' badge",
              "Download the Kindle book",
              "Enable Audible narration within the Kindle app",
              "Test switching between reading and listening",
              "Test synchronization between reading position and audio position",
              "Test on multiple devices to verify sync functionality",
              "Test offline access to both text and audio content"
            ]}
            expectedResults={[
              "'Read and Listen Free' books provide both text and audio without additional purchase",
              "Switching between reading and listening maintains proper position in the book",
              "Whispersync technology correctly synchronizes position across formats",
              "Both reading and listening modes work in offline mode after download",
              "Position synchronizes correctly when switching between devices",
              "Audio controls are intuitive and functional within the reading interface"
            ]}
          />
        </Section>
        
        <Section title="Medical Care and Prescription Benefits" id="medical">
          <TestCase 
            title="RxPass Eligibility and Pricing"
            priority="High"
            preconditions={[
              "User has active Prime membership",
              "User has health insurance information available",
              "Test with various prescription medications"
            ]}
            steps={[
              "Log in with Prime account",
              "Access RxPass enrollment page",
              "Check eligibility with various health insurance scenarios",
              "Add multiple eligible medications to profile",
              "Verify the flat $5/month pricing regardless of medication count",
              "Test with medications not covered by RxPass",
              "Complete enrollment process",
              "Verify billing and subscription details"
            ]}
            expectedResults={[
              "Eligible Prime members can enroll in RxPass",
              "System correctly identifies medications eligible for RxPass",
              "Flat monthly fee of $5 is charged regardless of how many eligible prescriptions",
              "System clearly identifies medications not covered by RxPass",
              "Eligibility restrictions (such as Medicare/Medicaid participants) are enforced",
              "Subscription appears correctly in user's account settings",
              "Billing occurs on expected schedule after enrollment"
            ]}
          />
          
          <TestCase 
            title="One Medical Membership Discount"
            priority="Medium"
            preconditions={[
              "User has active Prime membership",
              "Testing in location with One Medical availability",
              "Compare with non-Prime pricing"
            ]}
            steps={[
              "Log in with Prime account",
              "Access One Medical membership enrollment",
              "Verify Prime member pricing ($9/month)",
              "Attempt to add family members at $6/month each",
              "Exceed the family member limit (if applicable)",
              "Complete enrollment process",
              "Verify billing and membership details",
              "Test access to One Medical services with membership"
            ]}
            expectedResults={[
              "Prime members see discounted rate of $9/month (vs standard $199/year)",
              "Additional family members can be added at $6/month each",
              "System enforces the limit of 6 total members per account",
              "Membership benefits are properly activated after enrollment",
              "Billing occurs on expected schedule and at correct amounts",
              "One Medical app recognizes Prime-linked membership status",
              "All advertised One Medical services are accessible with membership"
            ]}
          />
          
          <TestCase 
            title="Prescription Delivery Speed Testing"
            priority="High"
            preconditions={[
              "User has active Prime membership",
              "User has valid prescription in Amazon Pharmacy",
              "Testing with non-restricted medications"
            ]}
            steps={[
              "Log in with Prime account",
              "Access Amazon Pharmacy",
              "Add prescription to cart",
              "Proceed to checkout",
              "Verify free Two-Day shipping option",
              "Complete order",
              "Track delivery process",
              "Verify actual delivery against promised timeframe",
              "Repeat with various medication types"
            ]}
            expectedResults={[
              "Prime members receive free Two-Day shipping on prescriptions",
              "Delivery timeframe promise is consistent with Prime delivery standards",
              "Special handling medications have appropriate shipping options",
              "Delivery tracking works correctly for prescription orders",
              "Actual delivery occurs within promised timeframe",
              "Package meets all required safety and privacy standards"
            ]}
          />
          
          <TestCase 
            title="Prescription Savings Calculator Accuracy"
            priority="Medium"
            preconditions={[
              "User has active Prime membership",
              "Testing with various medication types and dosages",
              "Compare with actual pharmacy pricing when possible"
            ]}
            steps={[
              "Log in with Prime account",
              "Access prescription savings tool",
              "Search for specific medications",
              "Enter dosage and quantity information",
              "View calculated savings vs. retail price",
              "Compare with non-Prime pricing",
              "Verify savings at multiple pharmacy locations",
              "Cross-check savings claims with actual pharmacy prices"
            ]}
            expectedResults={[
              "Savings calculator shows up to 80% potential savings on medications",
              "Calculated savings are reasonably accurate compared to actual retail prices",
              "System displays correct pricing across different pharmacy options",
              "Prime-specific discounts are clearly identified",
              "Pricing information is updated regularly to reflect current rates",
              "Calculator works across wide range of medications and dosages"
            ]}
          />
        </Section>
        
        <Section title="Other Benefits" id="other">
          <TestCase 
            title="Prime Benefit Sharing Functionality"
            priority="High"
            preconditions={[
              "User has active Prime membership",
              "Second adult account available for testing",
              "Testing with household at same address"
            ]}
            steps={[
              "Log in with primary Prime account",
              "Access account settings",
              "Navigate to 'Manage Prime Membership' section",
              "Select option to share benefits with household",
              "Enter second adult's account information",
              "Complete linking process",
              "Log in with second account",
              "Test access to shared benefits (shipping, Prime Video, etc.)",
              "Test restrictions on non-shared benefits"
            ]}
            expectedResults={[
              "Primary account can successfully link one other adult account",
              "Shared benefits (shipping, Prime Video, Prime Reading) work on second account",
              "Non-shared benefits remain restricted to primary account",
              "System prevents sharing with more than one other adult",
              "System prevents sharing with non-household members (different address)",
              "System prevents sharing for Prime Student/Young Adult accounts"
            ]}
          />
          
          <TestCase 
            title="Amazon Prime Fuel Savings Integration"
            priority="Medium"
            preconditions={[
              "User has active Prime membership",
              "User has registered for earnify account",
              "Testing at participating bp, Amoco, or ampm gas stations"
            ]}
            steps={[
              "Log in with Prime account",
              "Link earnify account to Prime membership",
              "Verify account linking status",
              "Visit participating gas station",
              "Identify pump with Prime fuel savings",
              "Follow required process to activate savings",
              "Complete fuel purchase",
              "Check receipt for 10¢/gallon discount",
              "Verify transaction in earnify account"
            ]}
            expectedResults={[
              "Prime account successfully links with earnify account",
              "System recognizes Prime membership at participating gas stations",
              "10¢/gallon discount is correctly applied at purchase",
              "Discount appears on receipt and in earnify account history",
              "Savings work consistently across different participating stations",
              "Proper error handling if linking process fails"
            ]}
          />
          
          <TestCase 
            title="Prime Membership Cancellation Process"
            priority="High"
            preconditions={[
              "User has active Prime membership",
              "Testing with various account types (monthly, annual, trial)",
              "Testing at different points in billing cycle"
            ]}
            steps={[
              "Log in with Prime account",
              "Access 'Manage Prime Membership' settings",
              "Navigate to cancellation options",
              "Select option to cancel membership",
              "Document retention offers presented",
              "Complete cancellation process",
              "Verify membership status change",
              "Test access to Prime benefits after cancellation",
              "Check for appropriate refund if applicable"
            ]}
            expectedResults={[
              "Cancellation process is straightforward and accessible",
              "System presents retention offers before final cancellation",
              "Membership status updates correctly after cancellation",
              "Prime benefits continue until end of current billing period",
              "Appropriate prorated refund is processed for annual members if eligible",
              "User receives confirmation email with cancellation details",
              "Account shows correct status after cancellation is complete"
            ]}
          />
          
          <TestCase 
            title="Sales Tax Application on Prime Membership"
            priority="Medium"
            preconditions={[
              "Test accounts with addresses in multiple states",
              "Compare states with and without Prime membership tax"
            ]}
            steps={[
              "Create Prime accounts with addresses in various states",
              "Subscribe to Prime membership",
              "Review checkout and payment confirmation",
              "Examine billing statement for tax charges",
              "Compare tax application across different states",
              "Update address to different state and observe changes",
              "Verify tax calculation amount is correct"
            ]}
            expectedResults={[
              "Sales tax is correctly applied in states requiring it",
              "No sales tax is charged in states without this requirement",
              "Tax amount is calculated at the correct rate for the state",
              "Tax status changes appropriately when address is updated to different state",
              "Tax application is consistent with stated policies",
              "Tax charges are clearly displayed during checkout process",
              "Tax information appears correctly on invoices and statements"
            ]}
          />
        </Section>
      </main>
      
      <footer className="mt-12 pt-6 border-t text-center text-gray-600">
        <p>Amazon Prime Black Box Testing Scenarios - Created with React</p>
      </footer>
    </div>
  );
}

export default AmazonPrimeTestingApp;