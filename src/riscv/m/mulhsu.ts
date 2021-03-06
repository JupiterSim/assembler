import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32M mulhsu instruction. */
export class MULHSU extends RType {
  /**
   * Creates a new RV32M mulhsu instruction.
   *
   * @param rd  - Destination register.
   * @param rs1 - Source register 1.
   * @param rs2 - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'mulhsu', 0x33, rd, 0x2, rs1, rs2, 0x1);
  }
}
