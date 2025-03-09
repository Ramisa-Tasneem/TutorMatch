<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;
use App\Models\Message;

class ChatController extends Controller
{
    
    public function index()
    {
        return response()->json(Message::all());
    }

    
    public function broadcast(Request $request)
    {
        $message = Message::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $request->receiver_id,
            'message' => $request->message
        ]);

        broadcast(new MessageSent($message, auth()->user(), $request->receiver_id))->toOthers();

        return response()->json(['message' => 'Message sent successfully!', 'data' => $message]);
    }

    
    public function receive(Request $request)
    {
        $messages = Message::where('receiver_id', auth()->id())
            ->orWhere('sender_id', auth()->id())
            ->get();

        return response()->json(['messages' => $messages]);
    }
}
