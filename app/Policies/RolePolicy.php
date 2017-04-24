<?php

namespace App\Policies;

use App\Models\Data\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    public function administrator(User $user)
    {
        return $this->inArray(['administrator'], $user);
    }

    public function moderator(User $user)
    {
        return $this->inArray(['administrator', 'moderator'], $user);
    }

    public function contributor(User $user)
    {
        return $this->inArray(['administrator', 'moderator', 'contributor'], $user);
    }

    /**
     * Determines if the user has a role and if its in the provided array of allowables
     *
     * @param array $allowed
     * @param User $user
     * @return bool
     */
    protected function inArray(array $allowed, User $user)
    {
        $role = $user->role();
        return $role && in_array(strtolower($role->name), $allowed);
    }
}
