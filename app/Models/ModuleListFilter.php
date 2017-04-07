<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;

/**
 * Implements domain functionality pertaining to the filtering process on the ModuleList page
 *
 * Class ModuleListFilter
 * @package App\Models
 */
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
            'moduleLengths.*' => 'integer|distinct',
            'search' => 'array|nullable'
        ];
    }

    /**
     * Adds clauses to reduce the returned modules based on provided filters
     *
     * @param Builder $modules
     * @param array $filters
     * @return Builder
     */
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

        if (isset($filters['search'])) {
            $modules = $this->filterSearch($modules, $filters['search']);
        }

        return $modules;
    }

    /**
     * Adds clauses to the modules builder for contextual text search parameters
     *
     * @param Builder $modules
     * @param array $searchFilters
     * @return Builder
     */
    protected function filterSearch(Builder $modules, array $searchFilters): Builder
    {
        return $modules;
    }
}