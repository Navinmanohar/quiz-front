
const Auth=()=>{
    return <>
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form>
                <div className="form-container">
                    <label className="form-label">Username</label>
                    <input className="form-input lh-ls" type ="text" placeholder="abc"></input>
                </div>
                <div className="form-containe">
                <label className="form-label">Password</label>
                    <input className="form-input lh-ls" type ="text" placeholder="**"></input>
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                </div>
                </form>
            </div>
        </div>
    </>
}