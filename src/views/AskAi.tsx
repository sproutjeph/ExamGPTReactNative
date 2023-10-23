import colors from '@utils/colors';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useAppSelector} from '@store/hooks';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

const ChatInterface: React.FC = () => {
  const {currentQuestion} = useAppSelector(state => state.askAI);
  const [userMessages, setUserMessages] = useState<Message[]>([]);
  const [botMessages, setBotMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const flatListRef = useRef<FlatList<Message>>(null);

  const handleSendMessage = () => {
    if (inputMessage) {
      const userMessage: Message = {
        text: inputMessage,
        isUser: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setUserMessages([...userMessages, userMessage]);
      setInputMessage('');

      // Simulating a bot response with a delay for demonstration
      setTimeout(() => {
        const botResponse: Message = {
          text: 'Echo: ' + inputMessage,
          isUser: false,
          timestamp: new Date().toLocaleTimeString(),
        };
        setBotMessages([...botMessages, botResponse]);
      }, 1000);
    }
  };

  useEffect(() => {
    setInputMessage(currentQuestion);
  }, [currentQuestion]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList
        ref={flatListRef}
        data={userMessages.concat(botMessages)}
        keyExtractor={(message, index) => index.toString()}
        renderItem={({item}) => (
          <View style={item.isUser ? styles.userMessage : styles.botMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={text => setInputMessage(text)}
          onSubmitEditing={handleSendMessage}
          multiline
        />
        <Pressable style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.tertiaryContainer,
    borderRadius: 8,
    padding: 8,
    margin: 8,
    maxWidth: '70%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondaryContainer,
    borderRadius: 8,
    padding: 8,
    margin: 8,
    maxWidth: '70%',
  },
  messageText: {
    color: colors.onBackground,
    fontSize: 16,
  },
  timestamp: {
    color: 'gray',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sendButtonText: {
    color: colors.onPrimary,
  },
});

export default ChatInterface;
