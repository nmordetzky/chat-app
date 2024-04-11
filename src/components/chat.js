import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from "firebase/firestore";
import { db, auth } from "../firebase-config";

export const Chat = (props) => {

    const {room} = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room));
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages);
        });
        return () => unsuscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(newMessage);
        
        if (newMessage === "") return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room
        });

        setNewMessage("");
    };
    return (
        <div>Chat
            <div>
                {messages.map((message) => (
                    <h1>{message.text}</h1>
                ))}
            </div>
            <form onSubmit={handleSubmit} >
                <input 
                    placeholder="say something ..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    className="input"
                />
                <button type="submit">Send</button>
            </form>
        </div> 
    )
}