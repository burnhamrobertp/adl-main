<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;

class ModuleListFilter
{
    public function rules(): array
    {
        return [
            'minLevel' => 'integer|nullable',
            'maxLevel' => 'integer|nullable',
            'setting' => 'integer|nullable',
            'editions' => 'array',
            'editions.*' => 'integer|distinct',
            'moduleLengths' => 'array',
            'moduleLengths.*' => 'integer|distinct'
        ];
    }

    public function filter(Builder $modules, array $filters): Builder
    {
        if (isset($filters['minLevel'])) {
            $modules->where('min_level', '>=', $filters['minLevel']);
        }

        if (isset($filters['maxLevel'])) {
            $modules->where('max_level', '<=', $filters['maxLevel']);
        }

        if (isset($filters['setting'])) {
            $modules->where('setting_id', $filters['setting']);
        }

        if (isset($filters['editions'])) {
            $modules->whereIn('edition_id', $filters['editions']);
        }

        if (isset($filters['moduleLengths'])) {
            $modules->whereIn('length_id', $filters['moduleLengths']);
        }

        return $modules;
    }
}