<div id="adl-filters" class="bg-faded">
    <div id="adl-description" class="p-2">
        Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of categories.
        Enable the filters of your choice and the results will update to match.
    </div>

    @component('layout.filter')
        @slot('id') edition @endslot
        @slot('label') Edition @endslot

        <button type="button" class="btn btn-secondary btn-sm">1e</button>
        <button type="button" class="btn btn-secondary btn-sm">AD&D</button>
        <button type="button" class="btn btn-secondary btn-sm">3e</button>
        <button type="button" class="btn btn-secondary btn-sm">4e</button>
        <button type="button" class="btn btn-secondary btn-sm">5e</button>
    @endcomponent

    @component('layout.filter')
        @slot('id') level @endslot
        @slot('label') Level Range @endslot

        <div class="input-group input-group-sm">
            <span class="input-group-addon">
                <label for="adl-filter-level-min">Min</label>
            </span>
            <input id="adl-filter-level-min" type="text" class="form-control" aria-label="Minimum adventure level"/>

            <span class="input-group-addon">
                <label for="adl-filter-level-max">Max</label>
            </span>
            <input id="adl-filter-level-max" type="text" class="form-control" aria-label="Minimum adventure level"/>
        </div>
    @endcomponent

    @component('layout.filter')
        @slot('id') length @endslot
        @slot('label') Adventure Length @endslot

        <button type="button" class="btn btn-secondary btn-sm">One-shot</button>
        <button type="button" class="btn btn-secondary btn-sm">Short</button>
        <button type="button" class="btn btn-secondary btn-sm">Medium</button>
        <button type="button" class="btn btn-secondary btn-sm">Long</button>
    @endcomponent

    @component('layout.filter')
        @slot('id') search @endslot
        @slot('label') Search <i><small>(item, creature, etc)</small></i> @endslot

        <input type="text" class="form-control">
    @endcomponent

    @component('layout.filter')
        @slot('id') digitalcopy @endslot
        @slot('label') Digital Copy Available @endslot
    @endcomponent
</div>