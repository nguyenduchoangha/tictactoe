var video_hold = document.getElementById("video-chat");
var video_out  = document.getElementById("vid-box");

function login(form) {
    user_name = form.username.value || "Anonymous";
    var phone = window.phone = PHONE({
        number        : user_name, // listen on username line else Anonymous
        publish_key   : 'your_pub_key',
        subscribe_key : 'your_sub_key',
        datachannels  : true,  // Enable Data Channels
    }); 
    phone.ready(function(){ form.username.style.background="#55ff5b"; form.login_submit.hidden="true"; });
    phone.receive(function(session){
        session.connected(function(session) { video_hold.hidden=false; video_out.appendChild(session.video); });
        session.ended(function(session) { video_out.innerHTML=''; });
    });
    // Prepare Data Channel
    return false;
}

function makeCall(form){
    if (!window.phone) alert("Login First!");
    else phone.dial(form.number.value);
    return false;
}