import ButtonPay from "./pay/ButtonPay"
import FormPay from "./pay/FormPay"
import InforPay from "./pay/InforPay"
import PricePay from "./pay/PricePay"

const Pay = () => {
  return (
    <div className="flex flex-1 gap-4 mx-auto w-[1024px] py-5">
      <div className="max-w-[680px] ">
        <ButtonPay/>
        <FormPay/>
      </div>
      <div className="flex flex-col flex-1 gap-y-5">
        <PricePay/>
        <InforPay/>
      </div>
    </div>

  )
}

export default Pay