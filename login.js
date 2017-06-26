var video_hold = document.getElementById("video-chat");
var video_out  = document.getElementById("vid-box");

function login(form) {
    user_name = form.username.value || "Anonymous";
    var phone = window.phone = PHONE({
        number        : user_name, // listen on username line else Anonymous
        publish_key   : 'pub-c-c3e81c70-a6e1-4e3d-9051-8974d75cc613',
        subscribe_key : 'sub-c-52ac65d8-5a52-11e7-b83d-02ee2ddab7fe',
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

function end(){
    if (!window.phone) return;
    window.phone.hangup();
    video_hold.hidden = true;
}