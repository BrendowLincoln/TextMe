import { Text, View } from "react-native";
import styles from "./Style";
import { useEffect, useState } from "react";
import moment from "moment/moment";

const MessageComponent = ({ message, isUser }) => {

    const [messageDate, setMessageDate] = useState("");

    useEffect(() => {
        const date = moment(message.dataHora).format("HH:mm");
        setMessageDate(date);
    }, [message]);

    return message && (
        <View style={styles.container}>
            <View style={isUser ? styles.userMessageRow : styles.contactMessageRow}>
                <View style={styles.messageContainer}>
                    <Text style={
                        isUser ? [styles.message, styles.userMessageBackground] :
                        [styles.message, styles.contactMessageBackground]
                    }>
                        {message.mensagem}
                    </Text>
                    <View style={[styles.dateContainer, {
                        justifyContent: isUser ? "flex-end" : "flex-start",
                    }]}>
                        <Text style={styles.hourMessage}>{messageDate}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

export default MessageComponent;