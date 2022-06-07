import KafkaProducerDTO from '../dtos/KafkaProducerDTO';

export default interface KafkaProducerInterface {
  sendEvent(payload: KafkaProducerDTO): Promise<void>;
}
