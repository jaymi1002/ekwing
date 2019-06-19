<script type="text/javascript">
import { eButton } from '@/components/button';
export default {
    name: 'stu-button',
    mixins: [eButton],
    props: {
        activeType: {
            default: 'scale'
        }
    },
    data() {
        return {
        }
    }
}

</script>
<style lang="scss" scoped>
.stu-primry-1 {
    background-color: #46c3ff;
    color: #fff;
}
.stu-primry-1-disabled {
    background-color: #999;
    color: #fff;
}
</style>
