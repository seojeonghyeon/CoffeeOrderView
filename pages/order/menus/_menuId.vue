<template>
    <div>
        <div class="menu-detail">
            <div class="main-panel">
                <img
                    class="menu-image" 
                    :src="responseMenu.menuImage"
                    :alt="responseMenu.menuName"
                />
            </div>
            <div class="side-panel">
                <p class="menu-name">{{ responseMenu.menuName }}</p>
                <p class="price">가격 : {{ responseMenu.price }}</p>
                <p class="quantity">재고 수량 : {{ responseMenu.quantity }}</p>
                <p class="description">설명 : {{ responseMenu.description }}</p>
            </div>
        </div>
        <FooterForLogin></FooterForLogin>
    </div>
</template>
<script>
import { fetchMenuById } from '@/api/index';
import FooterForLogin from '@/components/FooterForLogin.vue';

export default {
    components: { FooterForLogin },
    async asyncData({ params }) {
        const response = await fetchMenuById(params.menuId)
        const responseMenu = response.data
        return { responseMenu }
    },
}
</script>
<style scoped>
.menu-detail {
    display: flex;
}
.menu-image {
    position: relative;
    width: 50vw;
    height: 50vw;
}
.side-panel {
  position: relative; /* 자식 요소를 absolute로 설정하여 부모 요소에 상대적으로 위치시킵니다. */
  width: 50vw;
  height: 50vw;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5); /* 검은색 바탕에 투명도 적용 */
  color: white; /* 흰색 글자색 */
  padding: 5px; /* 텍스트 주변에 padding을 추가하여 가독성을 높입니다. */
}

.menu-name {
  font-weight: bold; /* 메뉴 이름을 두껍게 표시합니다. */
  margin-bottom: 5px; /* 메뉴 이름 아래에 여백을 추가합니다. */
}
</style>