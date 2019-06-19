<template>
    <div>
        <div>
        	row:
            <div class="flex row">
                <div class="flex-1 yellow">flex-1</div>
                <div class="flex-2 red">flex-2</div>
                <div class="flex-1 green">flex-1</div>
            </div>
            row > .col
            <div class="flex row">
                <div class="col-1 yellow">col-1</div>
                <div class="col-1 red">col-1</div>
                <div class="col-10 green">col-10</div>
            </div>
            row > .col
            <div class="flex row">
                <div class="col yellow">col-1</div>
                <div class="col red">col-1</div>
                <div class="col green">col-10--34324-23-423--423--34-234-32-</div>
            </div>
            row.reverse
            <div class="flex row reverse">
                <div class="flex-1 yellow">flex-1</div>
                <div class="flex-2 red">flex-2</div>
                <div class="flex-1 green">flex-1</div>
            </div>
            column
            <div class="flex column">
                <div class="yellow">yellow</div>
                <div class="red">red</div>
                <div class="green">green</div>
            </div>
            column.reverse
            <div class="flex column reverse">
                <div class="yellow">yellow</div>
                <div class="red">red</div>
                <div class="green">green</div>
            </div>

            <div class="flex">
                <div class="yellow order-last">yellow1</div>
                <div class="yellow">yellow2</div>
                <div class="yellow">yellow3</div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'flex',
}

</script>
<style>
.yellow {
    background-color: yellow;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.blue {
    background-color: blue;
}

.orange {
    background-color: orange;
}

</style>
