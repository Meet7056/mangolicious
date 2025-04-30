import axios from 'axios';
import toast from 'react-hot-toast';

const API_START_POINT = "https://mangoliciousfood.com/api";

export const registerUser = async (payload) => {
    try {

        const response = await axios.post(`${API_START_POINT}/register_user/`, payload);

        return response.data;

    } catch (error) {
        console.log('API POST error:', error.response?.data?.message || error.message);
        return error;
    }
};

export const loginUser = async (payload) => {
    try {

        const response = await axios.post(`${API_START_POINT}/login_user/`, payload);

        return response.data;

    } catch (error) {
        console.log('API POST error:', error.response?.data?.message || error.message);
        return error;
    }
};

export const viewProducts = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
            `${API_START_POINT}/get_mangoes/`,
            {
                "city": localStorage.getItem("city") 
            },
            {
                headers: {
                    token
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log("API POST error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const addOrder = async (payload) => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid");

        if (!user_id) {
            toast.error("Please login to your account!");
        }

        const response = await axios.post(
            `${API_START_POINT}/add_to_cart/`,
            {
                ...payload,
                user_id
            },
            {
                headers: {
                    token
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log("API POST error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const removeOrder = async (payload) => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid");

        const response = await axios.delete(`${API_START_POINT}/remove_from_cart/`, {
            data: {
                ...payload,
                user_id
            },
            headers: {
                token
            }
        });

        return response.data;

    } catch (error) {
        console.log("API DELETE error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const getOrders = async () => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid");

        const response = await axios.post(
            `${API_START_POINT}/view_cart/`,
            {
                user_id
            },
            {
                headers: {
                    token
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log("API POST error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};


export const getReviews = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
            `${API_START_POINT}/get_reviews/`,
            {
                headers: {
                    token
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log("API POST error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const placeOrder = async (payload) => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid");

        const response = await axios.post(
            `${API_START_POINT}/place_order/`,
            {
                ...payload,
                user_id: Number(user_id),
            },
            {
                headers: {
                    token,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log("API POST error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};


export const viewProfile = async () => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid"); // assuming you store it in localStorage

        const response = await axios.get(
            `${API_START_POINT}/view_profile/`,
            {
                params: { user_id },
                headers: {
                    token: token,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log("API GET error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const getCuurrentSaleAllApi = async () => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid"); // assuming you store it in localStorage

        const response = await axios.get(
            `${API_START_POINT}/get_active_flash_sales/`,
            {
                params: { user_id },
                headers: {
                    token: token,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log("API GET error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const updateProfile = async (payload) => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid"); // assuming you store it in localStorage

        const response = await axios.put(
            `${API_START_POINT}/edit_profile/`,
            {
                ...payload,
                user_id: user_id,
            },
            {
                headers: {
                    token,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;

    } catch (error) {
        console.error("API PUT error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const addReview = async (payload) => {
    try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userid"); // assuming you store it in localStorage

        const response = await axios.post(
            `${API_START_POINT}/submit_review/`,
            {
                ...payload,
                user_id: user_id,
            },
            {
                headers: {
                    token,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("API POST error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};

export const orderHistory = async (payload) => {
    try {
        const user_id = localStorage.getItem("userid"); // assuming you store it in localStorage
        const token = localStorage.getItem("token");

        const response = await axios.post(
            `${API_START_POINT}/order_history/`,
            {
                ...payload,
                user_id: user_id,
            },
            {
                headers: {
                    token,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Order history error:", error.response?.data?.message || error.message);
        return { error: error.response?.data || error.message };
    }
};
