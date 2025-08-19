# Chat Widget

A live, global chat widget built with `@lume/element` and powered by Meteor for real-time messaging and user authentication.

This example demonstrates:

- Creating a custom element called `<chat-widget>` using `@lume/element`
- Real-time chat functionality with Meteor backend
- User authentication integration
- Simple, clean UI for messaging

## Features

- **Real-time messaging**: Messages appear instantly for all connected users
- **User authentication**: Login required to send messages
- **Simple UI**: Clean, minimal interface focused on the chat experience
- **Custom element**: Reusable `<chat-widget>` component that can be used anywhere

## Usage

Simply add the custom element to any HTML page:

```html
<chat-widget></chat-widget>
```

The widget will automatically handle authentication and provide a complete chat interface.

## Implementation

The chat widget is built using:

- `@lume/element` for the custom element definition
- Meteor for backend data and authentication
- Solid.js reactivity for real-time UI updates
- Modern CSS for styling