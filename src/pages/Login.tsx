import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type FormData = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
    } = useForm<FormData>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        email: "admin@admin.com",
        password: "admin123"
    });
    const onSubmit = (data: FormData) => {
        console.log("Form data submitted:", data);
        if (data.email === formData.email && data.password === formData.password) {
            Cookies.set("isLoggedIn", "true");
            navigate('/dashboard');
            console.log("login success");
        } else {
            console.log("Invalid email or password");
        }
        setFormData(data);
    };
    return (
        <div className="container">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        {...register("email", { required: true })}
                        defaultValue={formData.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        {...register("password", { required: true })}
                        defaultValue={formData.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
