import { ApprovalWithoutRecoveryImage } from '../assets/achievements/approvalWithoutRecovery';
import { DeliveryRateImage } from '../assets/achievements/deliveryRate';
import { FridayThenImage } from '../assets/achievements/fridayThen';
import { HelloWorldImage } from '../assets/achievements/helloWorld';
import { StartingTakeOffImage } from '../assets/achievements/startingTakeOff';
import { TookOffImage } from '../assets/achievements/tookOff';

export const achievementsMap = {
  HELLO_WORLD: {
    title: 'Hello World!',
    caption: 'Você fez sua primeira entrega neste projeto. Parabéns por seu primeiro passo!',
    image: HelloWorldImage,
  },

  STARTING_TAKEOFF: {
    title: 'Começando a decolagem',
    caption: 'Você conquistou sua primeira aprovação em um requisito neste projeto! Continue assim!',
    image: StartingTakeOffImage,
  },

  DELIVERY_RATE: {
    title: 'Cadência de entregas',
    caption: 'Você já realizou 10 entregas neste projeto. Parabéns pela persistência e cautela!',
    image: DeliveryRateImage,
  },

  ITS_FRIDAY_THEN: {
    title: 'Deploy na sexta!',
    caption: 'Aqui não tem polêmica: você acabou de fazer um deploy na sexta-feira! Tomara que não quebre!',
    image: FridayThenImage,
  },

  APPROVAL_WITHOUT_RECOVERY: {
    title: 'Aprovação sem recuperação',
    caption: 'Parabéns, você desenvolveu as habilidades desse bloco e conquistou a aprovação no projeto! 🌟',
    image: ApprovalWithoutRecoveryImage,
  },

  TOOK_OFF: {
    title: 'Decolou!',
    caption: 'Você completou todos os requisitos do projeto, atingindo a nota máxima. Esse sucesso é seu! VQV',
    image: TookOffImage,
  },
};
