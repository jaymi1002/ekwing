<template>
    <div>
        <div>
            row > .col
            <div class="flex row">
                <div class="col-1 yellow">col-1</div>
                <div class="col-1 red">col-1</div>
                <div class="col-10 green">col-10</div>
            </div>
            row > .col
            <div class="flex row reverse">
                <div class="col-1 yellow">col-1</div>
                <div class="col-1 red">col-1</div>
                <div class="col-10 green">col-10--34324-23-423--423--34-234-32-23432434423423423</div>
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
