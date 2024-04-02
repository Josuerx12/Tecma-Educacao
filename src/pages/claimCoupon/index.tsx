import { useForm } from "react-hook-form";
import { useAuth } from "../../store/useAuth";
import { useMutation } from "react-query";
import { ClaimCouponCredentials, useUtils } from "../../hooks/useUtilities";
import { useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { useRef } from "react";

const ClaimCoupon = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const { claimCoupon } = useUtils();

  const { register, handleSubmit } = useForm<ClaimCouponCredentials>();

  const { mutateAsync, isLoading, isSuccess } = useMutation(
    "claimCoupon",
    claimCoupon,
    {
      onSuccess: (data) => {
        if (data.STATE === 1) {
          navigate("/");
          toast.success(`${data.SUCCESS}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          });
        }

        if (data.STATE === 0) {
          toast.error(`${data.ERROR}`);
        }
      },
    }
  );

  async function onSubmit(data: ClaimCouponCredentials) {
    await mutateAsync(data);
  }

  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="flex-1 flex flex-col items-center pt-10 gap-4">
      <h3 className="text-xl text-center ">Resgate de Código ou Cartão</h3>

      <form
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-96 rounded-lg p-3 flex flex-col gap-3"
      >
        <input type="hidden" {...register("user_cpf")} value={user?.user_cpf} />
        <input
          type="hidden"
          {...register("user_email")}
          value={user?.user_email}
        />
        <div className="flex flex-col gap-1">
          <label>Cupom:</label>
          <input
            {...register("coupon")}
            type="text"
            className="p-3 border border-black outline-red-500"
            placeholder="Insira seu Email ou CPF"
          />
        </div>
        <button
          onClick={() => ref.current?.requestSubmit()}
          disabled={isSuccess || isLoading}
          className="bg-red-500 p-2 rounded font-semibold text-white hover:bg-red-600 cursor-pointer"
        >
          Resgatar
        </button>
      </form>
    </div>
  );
};

export default ClaimCoupon;
