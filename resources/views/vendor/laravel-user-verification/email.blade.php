Click here to verify your account: <a href="{{ $link = route('user.verify', $user->verification_token) . '?email=' . urlencode($user->email) }}">{{ $link }}</a>
