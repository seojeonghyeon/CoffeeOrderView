<template>
    <div class="app">
        <main>
            <div class="popular-menu-slide">
                <div class="popular-menu-contents">
                    <div>
                        <p class="popular-menu-title"> 오늘의 인기 메뉴 </p>
                    </div>
                    <transition-group name="fade">
                    <div class="menu" v-for="(menu, index) in responsePopularMenuList" :key="menu.id" @click="moveToDetailPage(menu.id)">
                        <div class="menu-item">
                            <img class="menu-image" :src="menu.menuImage" :alt="menu.menuName" />
                            <div class="menu-details">
                                <p class="menu-name">{{ index+1 }}등 {{ menu.menuName }}</p>
                                <span class="menu-price">오늘의 가격 : {{ menu.price }}</span>
                                <p class="menu-order-count">주문 횟수 : {{ menu.orderCount }}</p>
                            </div>
                        </div>
                    </div>
                    </transition-group>
                </div>
            </div>
            <!-- 메뉴 둘러보기 / 로그인 / 회원가입  -->
            <footer-for-login></footer-for-login>
        </main>
    </div>
</template>
<script>
import FooterForLogin from '~/components/FooterForLogin.vue';
import { fetchPopularMenuList } from '@/api/index';

export default {
    components: { FooterForLogin },
    async asyncData() {
        const response = await fetchPopularMenuList()
        const responsePopularMenuList = response.data
        return { 
            ...responsePopularMenuList
         }
    },
    methods: {
        moveToDetailPage(id) {
            this.$router.push(`/order/menus/${id}`)
        }
    }
}
</script>
<style scoped>
.popular-menu-slide {
    overflow: hidden;
    font-family: 'Do Hyeon', sans-serif;
    background: #dcdcdc;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
}
.popular-menu-title {
    position: absolute;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 20px;
}
.popular-menu-contents {
    position: relative;
    height: 80vh;
    width: 100vw;
}
.menu {
    display: flex;
    padding: 10px;
    height: 25vh;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
.menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 120px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    text-align: right;
    color: rgba(255, 255, 255, 0.5);
    background: linear-gradient(0deg, #2F3B52,  #808080);
}
.menu-image {
    position: relative;
    width: 90px;
    height: 90px;
}
.menu-details {
  position: relative; /* 자식 요소를 absolute로 설정하여 부모 요소에 상대적으로 위치시킵니다. */
  width: 180px;
  height: 90px;
  text-align: right;
  align-self: flex-end;
  background-color: rgba(0, 0, 0, 0.5); /* 검은색 바탕에 투명도 적용 */
  color: white; /* 흰색 글자색 */
  padding: 5px; /* 텍스트 주변에 padding을 추가하여 가독성을 높입니다. */
}

.menu-name {
  font-weight: bold; /* 메뉴 이름을 두껍게 표시합니다. */
  margin-bottom: 5px; /* 메뉴 이름 아래에 여백을 추가합니다. */
}

.menu-price {
  font-size: 0.8em;
}
.menu-order-count {
    font-weight: bold;
    margin: 2px;
}
</style>