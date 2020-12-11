import React, { useState, useEffect } from 'react';

function doTracking(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    db.collection("chats").doc(chatId).onSnapshot(snapshot => {
        updateMessages(snapshot.data())
    })
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      db.collection("chats").doc(chatId).onSnapshot(snapshot => {
        updateMessages(snapshot.data())
    })
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}