import "./mailList.css"

function MailList(){
    return(
        <div className="mail">
            <div className="mailContainer">
                <h1>Save time, Save Money</h1>
                <span className="spanss">Sign up and we will send the best details to you</span><br/>
                <input type="text" placeholder="Please Enter your email" className="input"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default MailList;