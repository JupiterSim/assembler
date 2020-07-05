import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32M remu instruction. */
export class REMU extends RType {
  /**
   * Creates a new RV32M remu instruction.
   *
   * @param rd  - Destination register.
   * @param rs1 - Source register 1.
   * @param rs2 - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'remu', 0x33, rd, 0x7, rs1, rs2, 0x1);
  }
}
