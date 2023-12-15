<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Mading extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'author_id',
        'accepted_by',
        'title',
        'body',
        'status',
        'post_schedule',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'author_id' => 'integer',
        'accepted_by' => 'integer',
        'post_schedule' => 'datetime',
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'mading_categories');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function acceptedBy(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
