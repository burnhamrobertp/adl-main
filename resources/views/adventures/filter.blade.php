<div class="filter">
    <div class="col-1">
        <div class="pl-2">
            <input id="adl-filter-{{ $id }}-enable" type="checkbox" aria-label="Enable this filter"/>
        </div>
    </div>

    <div class="col-11">
        <div class="pr-2">
            <div><label for="adl-filter-{{ $id }}-enable">{{ $label }}</label></div>

            {{ $slot }}
        </div>
    </div>
</div>
<div class="line"></div>