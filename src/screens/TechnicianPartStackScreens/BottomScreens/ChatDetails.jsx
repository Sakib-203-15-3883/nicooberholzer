import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const ChatDetails = () => {
  const messages = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies tincidunt et tortor tincidunt ridiculus.",
      timestamp: "10:20am",
      isSent: false
    },
    {
      id: 2, 
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies tincidunt et tortor tincidunt ridiculus.",
      timestamp: "10:20am",
      isSent: true
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies tincidunt et tortor tincidunt ridiculus.", 
      timestamp: "10:20am",
      isSent: false
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies tincidunt et tortor tincidunt ridiculus.",
      timestamp: "10:20am", 
      isSent: true
    }
  ]

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backButton}>←</Text>
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20132814-PIMfObamjXgW2oHp0ZFtoB8TeWNtaH.png" }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Jhon Doe</Text>
        </View>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.messageContainer}>
        {messages.map((message) => (
          <View 
            key={message.id}
            style={[
              styles.messageWrapper,
              message.isSent ? styles.sentWrapper : styles.receivedWrapper
            ]}
          >
            {!message.isSent && (
              <Image
                source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20132814-PIMfObamjXgW2oHp0ZFtoB8TeWNtaH.png" }}
                style={styles.messageAvatar}
              />
            )}
            <View
              style={[
                styles.message,
                message.isSent ? styles.sentMessage : styles.receivedMessage
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  backButton: {
    fontSize: 24,
    marginRight: 15
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: '600'
  },
  messageContainer: {
    flex: 1,
    padding: 15
  },
  messageWrapper: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-end'
  },
  sentWrapper: {
    justifyContent: 'flex-end'
  },
  receivedWrapper: {
    justifyContent: 'flex-start'
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8
  },
  message: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 20
  },
  sentMessage: {
    backgroundColor: '#e3f2fd',
    borderBottomRightRadius: 5
  },
  receivedMessage: {
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 5
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20
  },
  timestamp: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
    alignSelf: 'flex-end'
  }
})

export default ChatDetails