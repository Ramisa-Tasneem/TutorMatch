<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Message;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $sender;
    public $receiver_id;

    public function __construct(Message $message, $sender, $receiver_id)
    {
        $this->message = $message;
        $this->sender = $sender;
        $this->receiver_id = $receiver_id;
    }

    public function broadcastOn()
    {
        return ['chat-channel.' . $this->receiver_id];
    }

    public function broadcastAs()
    {
        return 'message-sent';
    }
}
