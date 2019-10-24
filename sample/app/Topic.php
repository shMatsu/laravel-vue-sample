<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    public function toArray($request){
        return [
          'id' => $this->id,
          'title' => $this->title,
          'content' => $this->content,
          'date' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
