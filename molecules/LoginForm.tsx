import { Input } from "../atoms/Input";

interface LoginFormProps {
    username?: string;
    password?: string;
    onSubmit?: (username: string, password: string) => void
}

export const LoginForm = (props: LoginFormProps) => {
    const {username: usernameProp, password: passwordProp, onSubmit = () => {}} = props;
    const [username, setUsername] = useState(usernameProp || '');
    const [password, setPassword] = useState(passwordProp || '');
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    useEffect(() => {
        if (usernameProp && username !==usernameProp) setUsername(usernameProp);
    }, [usernameProp]);

    useEffect(() => {
        if (passwordProp && password !== passwordProp) setPassword(passwordProp);
    }, [passwordProp])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '') {
            setIsValidUsername(false);
            return;
        }
        if (password.trim() === '') {
            setIsValidPassword(false);
            return;
        }
        onSubmit && onSubmit(username, password);
    }

    return <form>
        <label for="username">Username:</label><br />
        {!isValidUsername ? <div>Invalid username, please try again!</div> : <></>}
        <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(value) => setUsername(value)}
        />
        <br />
        <label for="password">Password:</label><br />
        {!isValidPassword ? <div>Invalid password, please try again!</div> : <></>}
        <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(value) => setPassword(value)}
        />
        <br /><br />
        <input type="submit" onclick={handleSubmit} value="Submit" />
    </form>
}
