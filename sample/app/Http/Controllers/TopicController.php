<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// APIリソースを使用
use App\Http\Resources\Topic AS TopicResource;
use App\Topic;

class TopicController extends Controller
{
    // 一覧表示
    public function index()
    {
        return TopicResource::collection(Topic::all());
    }

    // 保存
    public function store(Request $request)
    {
        $topic = new Topic;
        $topic->title = $request->input('title', '');
        $topic->content = $request->input('content', '');

        $topic->save();
    }

    // １データ表示
    public function show(Topic $topic)
    {
        return new TopicResource($topic);
    }

    // 更新
    public function update(Request $request, Topic $topic)
    {
        $topic->title = $request->input('title', '');
        $topic->content = $request->input('content', '');

        $topic->save();
    }

    // 削除
    public function destroy(Topic $topic)
    {
        $topic->delete();
    }
}
