import './SignUpFormStyles.css';
import { Link } from 'react-router-dom';

function SignUpForm() {
    return (
        <div className='from-containerr'>
            <h1>Sign Up Here</h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Mail' />
                <input placeholder='Password' />
                <button><Link to='/'>Sign Up</Link></button>
            </form>
        </div>
    )
}
export default SignUpForm; 