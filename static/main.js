/**
 * Returns the current datetime for the message creation.
 */
function getCurrentTimestamp() {
    return new Date();
}

/**
 * Renders a message on the chat screen based on the given arguments.
 * This is called from the `showUserMessage` and `showBotMessage`.
 */
function renderMessageToScreen(args) {
    // local variables
    let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    let messagesContainer = $('.messages');

    // init element
    let message = $(`
    <li class="message ${args.message_side}">
        <div class="avatar"></div>
        <div class="text_wrapper">
            <div class="text">${args.text}</div>
            <div class="timestamp">${displayDate}</div>
        </div>
    </li>
    `);

    // add to parent
    messagesContainer.append(message);

    // animations
    setTimeout(function () {
        message.addClass('appeared');
    }, 0);
    messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/* Sends a message when the 'Enter' key is pressed.
 */
$(document).ready(function() {
    $('#msg_input').keydown(function(e) {
        // Check for 'Enter' key
        if (e.key === 'Enter') {
            // Prevent default behaviour of enter key
            e.preventDefault();
            // Trigger send button click event
            $('#send_button').click();
        }
    });
});

/**
 * Displays the user message on the chat screen. This is the right side message.
 */
function showUserMessage(message, datetime) {
    renderMessageToScreen({
        text: message,
        time: datetime,
        message_side: 'right',
    });
}

/**
 * Displays the chatbot message on the chat screen. This is the left side message.
 */
function showBotMessage(message, datetime) {
    renderMessageToScreen({
        text: message,
        time: datetime,
        message_side: 'left',
    });
}

/**
 * Custom questions and answers map.
 */
const qaMap = {
    "Hello": "Hi there! How can I assist you today?",
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hi there! How can I assist you today?",
    "Hi": "Hi there! How can I assist you today?",
    "how are you": "I'm a bot, but I'm here to help you!",
    "what is your name": "I'm your aqua x space chatbot.",
	"What is the importance of water education and awareness?": "Education and awareness promote water conservation, proper hygiene, and community engagement.",
	"What is the importance of clean water?": "Clean water is essential for human health, hygiene, and well-being.",
	"What are the main causes of water pollution?": "Industrial runoff, agricultural chemicals, human waste, and litter.",
	"What is the difference between clean water and safe water?":"Clean water is free from visible contaminants, while safe water is free from harmful bacteria, viruses, and other microorganisms.",
	"How does sanitation impact public health?":"Proper sanitation prevents the spread of diseases and promotes a healthy environment.",
	"What is the role of governments in ensuring clean water access?":"Governments should provide infrastructure, regulate water quality, and promote water conservation.",
	"How can individuals contribute to clean water efforts?":"Reduce plastic use, conserve water, and support organizations working on clean water initiatives.",
	"What are the effects of water scarcity on communities?":" Water scarcity leads to food insecurity, economic hardship, and social tension.",
	"How does climate change impact clean water access?":"Climate change exacerbates water scarcity, flooding, and contamination.",
	"What is the significance of proper wastewater management?":"Proper wastewater management prevents water pollution and protects public health.",
	"How can we promote water conservation in our daily lives?":"Take shorter showers, fix leaks, and use water-efficient appliances.",
	"What are the health risks associated with unclean water?":"Waterborne diseases like cholera, diarrhea, and typhoid fever.",
	"How can communities address water inequality?":" Implement inclusive water policies, invest in infrastructure, and promote education.",
	"What is the role of technology in clean water efforts?":"Technology can improve water treatment, monitoring, and distribution.",
	"How can we support marginalized communities in accessing clean water?":"Donate to organizations working on clean water projects and advocate for policy changes.",
	"What are the environmental impacts of water pollution?":"Harm to aquatic life",
	"What is the importance of water education and awareness?":"Education and awareness promote water conservation, proper hygiene, and community engagement.",
	"How can we reduce plastic waste in water sources?":"Implement recycling programs, use biodegradable alternatives, and organize community clean-ups.",
	"What are the benefits of using eco-friendly sanitation systems?":" Reduced water usage, minimized environmental impact, and improved public health.",
	"How can we address the issue of water privatization?":"Promote public ownership, regulate private companies, and ensure affordable access for all.",
	"What is the role of international cooperation in ensuring global clean water access?":"Collaboration on research, policy development, and funding to address the global water crisis.",
	"What are the main sources of pollution in the Yamuna River?":"Industrial waste, domestic sewage, agricultural runoff, and religious activities.",
	"How does the Yamuna River's water quality impact the health of people living in Delhi?":"The polluted water can cause waterborne diseases like cholera, diarrhea, and typhoid fever.",
	"What initiatives have been taken by the government to clean up the Yamuna River?":"The Yamuna Action Plan, Clean Yamuna Mission, and construction of sewage treatment plants.",
	"What role can individuals play in reducing pollution in the Yamuna River?":" Reduce plastic use, dispose of waste properly, and participate in clean-up drives.",
	"How does industrial waste contribute to the pollution of the Yamuna River?":" Industrial waste releases toxic chemicals, heavy metals, and organic pollutants into the river.",
	"What are the effects of Yamuna River pollution on aquatic life?":"Harm to fish, reduction in biodiversity, and disruption of the ecosystem.",
	"How can we improve sanitation infrastructure along the Yamuna River to prevent pollution?":" Upgrade sewage treatment plants, increase connectivity to sanitation networks, and enforce regulations.",
	"What are the challenges in implementing effective waste management systems along the Yamuna River?":"Lack of funding, inadequate infrastructure, and poor enforcement of regulations.",
	"How does climate change impact the water quality of the Yamuna River?":"Changes in precipitation patterns, increased flooding, and altered water flows.",
	"What are some successful examples of community-led initiatives to clean up the Yamuna River?":"Local clean-up drives, awareness campaigns, and eco-club initiatives.",
	"How can we promote sustainable agriculture practices to reduce chemical runoff into the Yamuna River?":"Encourage organic farming, reduce pesticide use, and implement crop rotation.",
	"What is the impact of religious activities on the pollution of the Yamuna River?":"Immersion of idols, flowers, and other offerings releases harmful substances into the river.",
	"How can we improve coordination between government agencies to address Yamuna River pollution?":" Regular meetings, shared data, and collaborative planning.",
	"What are the economic benefits of restoring the Yamuna River's water quality?":"Increased property values, improved fisheries, and enhanced tourism.",
	"How can we raise awareness about the importance of keeping the Yamuna River clean?":"Organize events, engage with local communities, and use social media campaigns.",
	"What was India's first major technological achievement after independence?":"Launching the first Indian satellite, Aryabhata, in 1975.",
	"Which Indian organization played a crucial role in developing the country's space technology?":"",
	"":"Which Indian organization played a crucial role in developing the country's space technology?",
	"It introduced high-yielding crop varieties, irrigation, and fertilizers, increasing food production and reducing hunger.":"It introduced high-yielding crop varieties, irrigation, and fertilizers, increasing food production and reducing hunger.",
	"Which Indian scientist is credited with developing the first Indian supercomputer, PARAM?":"Vijay Bhatkar",
	"What is the importance of the 'Digital India' initiative launched in 2015?":"It aims to transform India into a digitally empowered society and knowledge economy.",
	"How has India's IT industry contributed to the country's economic growth?":"It has generated significant exports, employment, and GDP growth.",
	"What is the role of the Indian government in promoting technological development?":"It provides funding, policies, and infrastructure support for research, innovation, and entrepreneurship.",
	"Which Indian company is a leading player in the global telecommunications industry?":"Bharti Airtel.",
	"What is the significance of the 'Make in India' initiative for technological development?":"It encourages indigenous manufacturing, innovation, and entrepreneurship.",
	"How has India's technological development impacted its global competitiveness?":"It has improved India's ranking in global innovation indices and attracted foreign investment.",
	"What are some challenges faced by India in its technological development journey?":" Infrastructure gaps, funding constraints, and brain drain.",
	"How can India leverage its technological capabilities for sustainable development?":"By focusing on renewable energy, e-governance, and inclusive innovation.",
	"What is the role of startups in driving India's technological innovation?":"They bring new ideas, products, and services, creating jobs and economic growth.",
	"How can India address the digital divide and promote inclusivity in technological development?":"Through initiatives like Digital Literacy Programs and rural broadband connectivity.",
	"What is the future outlook for India's technological development journey?":"It is expected to continue growing, driven by innovation, entrepreneurship, and government support."

    // Add more questions and answers here
};

/**
 * Get input from user and show it on screen on button click.
 */
$('#send_button').on('click', function (e) {
    // get user message
    let userMessage = $('#msg_input').val().trim();
    if (userMessage) {
        showUserMessage(userMessage);
        $('#msg_input').val('');

        // determine bot response
        let botResponse = getBotResponse(userMessage);

        // show bot message
        setTimeout(function () {
            showBotMessage(botResponse);
        }, 300);
    }
});

/**
 * Returns a bot response based on user input.
 */
function getBotResponse(userMessage) {
    console.log('User Message:', userMessage);  // Debugging log
    // Check the message in the qaMap
    if (qaMap[userMessage]) {
        console.log('Bot Response:', qaMap[userMessage]);  // Debugging log
        return qaMap[userMessage];
    } else {
        console.log('Bot Response: Sorry, I didn\'t understand that. Can you please rephrase?');  // Debugging log
        return "Sorry, I didn't understand that. Can you please rephrase?";
    }
}

/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
    showBotMessage('Hello there! How can I help you.');
});
