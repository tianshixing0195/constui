<template>
    <div class='key-container'>
        <div class='key-title'>请输入验证码</div>
        <div class='input-box'>
            <table>
                <tr>
                    <td>{{numArr[0]}}</td>
                    <td>{{numArr[1]}}</td>
                    <td>{{numArr[2]}}</td>
                    <td>{{numArr[3]}}</td>
                    <td>{{numArr[4]}}</td>
                    <td>{{numArr[5]}}</td>
                </tr>
            </table>
        </div>
        <div class='keyboard' @click.stop='_handleKeyPress'>
            <div class='key-row'>
                <div class='key-cell' data-num='7'>7</div>
                <div class='key-cell' data-num='8'>8</div>
                <div class='key-cell' data-num='9'>9</div>
            </div>
            <div class='key-row'>
                <div class='key-cell' data-num='4'>4</div>
                <div class='key-cell' data-num='5'>5</div>
                <div class='key-cell' data-num='6'>6</div>
            </div>
            <div class='key-row'>
                <div class='key-cell' data-num='1'>1</div>
                <div class='key-cell' data-num='2'>2</div>
                <div class='key-cell' data-num='3'>3</div>
            </div>
            <div class='key-row'>
                <div class='key-cell' data-num='D'>删除</div>
                <div class='key-cell' data-num='0'>0</div>
                <div class='key-cell' data-num='S'>确认</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "conKeyborad",
        data(){
            return{
                numArr:[]
            }
        },
        methods : {
            //处理按键
            _handleKeyPress(e) {
                let num = e.target.dataset.num;
                //不同按键处理逻辑

                switch (String(num)) {
                    //删除键
                    case 'D':
                        this._handleDeleteKey();
                        break;
                    //确认键
                    case 'S':
                        this._handleConfirmKey();
                        break;
                    default:
                        this._handleNumberKey(num);
                        break;
                }
            },

            //处理删除键
            _handleDeleteKey() {
                //如果没有输入，直接返回
                if (!this.numArr.length) return false;
                //否则删除最后一个
                this.numArr.splice(-1,1);
            },

            //处理数字
            _handleNumberKey(num) {
                if (this.numArr.length<6) {
                    this.numArr.push(num)
                }
            },
            //提交
            _handleConfirmKey() {
                if (this.numArr.length<6){
                    alert( '请输入正确验证码!' )
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .key-container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        display : -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .input-box {
        font-size: 35px;
        font-weight: bold;
        line-height: 40px;
        height:70px;
        padding: 10px 15px;
        text-align: right;
        width: 90%;
    }
    .input-box table{
        width:100%;
        height:100%;
        border-collapse: collapse;
    }
    .input-box table tr{
        height:100%;
        display: flex;
        justify-content: space-between;
    }
    .input-box td{
        text-align: center;
        flex: 1;
        border: 1px solid #ccc;
    }
    .keyboard {
        height: 240px;
        width: 100%;
    }

    .keyboard .key-row {
        display: flex;
        display: -webkit-flex;
        position: relative;
        height: 60px;
        line-height: 60px;
    }

    .keyboard .key-row::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d5d5d6;
        color: #d5d5d6;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .keyboard .key-cell {
        flex: 1;
        -webkit-box-flex: 1;
        text-align: center;
        position: relative;
    }

    .keyboard .key-cell::after {
        content: '';
        position: absolute;
        overflow: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        height: 200%;
        border-right: 1px solid #d5d5d6;
        color: #d5d5d6;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .keyboard .key-cell:nth-last-child(1)::after {
        border-right: 0;
    }


</style>
